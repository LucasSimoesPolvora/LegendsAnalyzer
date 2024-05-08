import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../../db/sequelize.mjs";
import { privateKey } from "../../auth/private_key.mjs";
import { auth } from "../../auth/auth.mjs";
import nodemailer from 'nodemailer' 

// Creating the router
const forgotPasswordRouter = express();

forgotPasswordRouter.put("/", (req, res) => {
    User.findOne({ where: { email: req.body.email } })
        .then((user) => {
            if(!user){
                res.status(200).json({ msg: 'The operation was successful !'})
            }
            const rdmPassword = Math.random().toString(36).slice(-10);
            bcrypt.hash(rdmPassword, 10).then((hash) => {
                User.update({ password: hash }, { where: { id_user: user.id_user } })
                    .then((user) => {
                        res.json({user})
                    })
            })
            
        }).catch((error) => {
            res.status(500).json({msg: error})
        })
});

export { forgotPasswordRouter };
