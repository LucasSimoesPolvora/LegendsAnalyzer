import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../../db/sequelize.mjs";
import { privateKey } from "../../auth/private_key.mjs";
import cookie from 'cookie'

// Creating the router
const loginRouter = express();

// endpoint for handling the router
loginRouter.post("/", (req, res) => {
  // Finding the user in the database by username
  User.findOne({ where: { username: req.body.username } })
    .then((user) => {
      // If user doesn't exist, return 404 error
      if (!user) {
        const message = `Username not found`;
        return res.status(401).json({ message });
      }
      // Comparing the provided password with the hashed password stored in the database
      bcrypt
        .compare(req.body.password, user.password)
        .then((isPasswordValid) => {
          // If password is invalid, return 401 error
          if (!isPasswordValid) {
            const message = `The password is incorrect`;
            return res.status(401).json({ message });
          } else {
            // If password is valid, generate JWT token
            const token = jwt.sign({ userId: user.id_user }, privateKey, {
              expiresIn: "1h", // Token expires in 1 hour
            });
            const message = `The user was successfully connected`;
            // Return success message along with user data and token
            res.cookie("token", token, {
              httpOnly: true,
              secure: false,
              sameSite: "strict",
              path: "/",
            });
            res.setHeader("Access-Control-Allow-Credentials", "true"); 

            res.status(201).json({ message, data: user });
          }
        });
    })
    .catch((error) => {
      // If an error occurs during the process, return a generic error message
      const message = `The user couldn't be connected. Try again later`;
      return res.status(500).json({ message, data: error });
    });
});

export { loginRouter }; // Exporting the router for use in other files
