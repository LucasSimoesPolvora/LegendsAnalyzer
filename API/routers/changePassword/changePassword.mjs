import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../../db/sequelize.mjs";
import { privateKey } from "../../auth/private_key.mjs";
import { auth } from "../../auth/auth.mjs";

// Creating the router
const changePasswordRouter = express();

changePasswordRouter.put("/:id", auth, (req, res) => {
  const userId = req.params.id;

  if (req.body.password) {
    //To make sure that the password is 10 caracters long
    if (req.body.password.length >= process.env.PASS_MIN_LENGTH) {
      bcrypt.hash(req.body.password, 10).then((hash) => {
        User.update({ password: hash }, { where: { id_user: userId } })
          .then((_) => {
            // Finding user by primary key
            return User.findByPk(userId).then((updatedUser) => {
              // If it doesn't exist, return code 404
              if (updatedUser === null) {
                const message =
                  "The user requested doesn't exist. Try again later";
                res.status(404).json({ message });
              }
              // If the user is updated successfuly. return code 200
              const message = `The user ${updatedUser.username} was successfuly updated`;
              res.status(200).json({ message });
            });
          })
          .catch((error) => {
            const message = "The user couldn't be updated. Try again later";
            res.status(500).json({ message, data: error });
          });
      });
    } else {
      const message = "The password length doesn't match the requirements";
      res.status(401).json({ message });
    }
  } else {
    const message = "You need a new password";
    res.status(401).json({ message });
  }
});

export { changePasswordRouter };
