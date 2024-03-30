import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../db/sequelize.mjs";
import { privateKey } from "../auth/private_key.mjs";
import { ValidationError } from "sequelize";

// Creating the router
const signUpRouter = express();

// endpoint for handling the router
signUpRouter.post("/", (req, res) => {
  bcrypt.hash(req.body.password, 10).then((hash) => {
    User.create({
        nickname: req.body.nickname,
        email: req.body.email,
        password: hash
    })
      .then((createdUser) => {
        // Return success message upon successful creation
        const message = `Your account has been successfully created !`;
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
});

export { signUpRouter };
