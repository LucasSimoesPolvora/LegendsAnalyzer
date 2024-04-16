import express from "express"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { User } from "../../db/sequelize.mjs"
import { privateKey } from "../../auth/private_key.mjs"
import { ValidationError } from "sequelize";

// Creating the router
const testRouter = express();

// endpoint for handling the router
testRouter.get("/", (req, res) => {
  User.findAll({})
    .then((users) => {
        res.json({ users })
    })
});

export { testRouter };
