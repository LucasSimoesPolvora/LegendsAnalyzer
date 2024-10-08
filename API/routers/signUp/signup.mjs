import express from "express"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { User } from "../../db/sequelize.mjs"
import { privateKey } from "../../auth/private_key.mjs"
import { ValidationError } from "sequelize";
import nodemailer from 'nodemailer';

// Creating the router
const signUpRouter = express();

// endpoint for handling the router
signUpRouter.post("/", (req, res) => {
  if (req.body.password.length >= process.env.PASS_MIN_LENGTH) {
    bcrypt.hash(req.body.password, 10).then((hash) => {
      User.create({
        username: req.body.username,
        email: req.body.email,
        password: hash,
        premium: false
      })
        .then((createdUser) => {
          // Return success message upon successful creation
          const message = `Your account has been successfully created !`;

          const token = jwt.sign({ userId: createdUser.id_user }, privateKey, {
            expiresIn: "1h", // Token expires in 1 hour
          });
          // Return success message along with user data and token
          res.cookie("jwt", token, {
            httpOnly: true,
            secure: false,
            sameSite: "strict",
            path: "/",
          });
          res.setHeader("Access-Control-Allow-Credentials", "true"); 
          res.status(200).json({ message });
        })
        .catch((error) => {
          // If the error is a validation error, return a 400 status code with the error message
          if (error instanceof ValidationError) {
            return res.status(400).json({
              message: error.message,
              data: error,
            });
          }
          // If there is any other error during the process
          const message = "The account couldn't be created. Try again later";
          res.status(500).json({ message, data: error });
        });
    });
  } else {
    const message = "The password length doesn't match the requirements"
    res.status(401).json({ message })
  }
});

export { signUpRouter };
