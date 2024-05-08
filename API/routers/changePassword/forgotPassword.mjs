import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../../db/sequelize.mjs";
import { privateKey } from "../../auth/private_key.mjs";
import { auth } from "../../auth/auth.mjs";

// Creating the router
const forgotPasswordRouter = express();

forgotPasswordRouter.put("/", (req, res) => {
    User.findOne({ where: { email: req.body.email } })
        .then((user) => {
            if (user) {
                res.json({ msg: 'hello' })
            } else {
                res.json({ msg: " not working" })
            }
        }).catch((error) => {
            res.status(500).json({msg: error})
        })
});

export { forgotPasswordRouter };
