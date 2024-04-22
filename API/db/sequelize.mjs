import { Sequelize, DataTypes } from "sequelize";
import bcrypt from "bcrypt"
import { userModel } from "../models/db_legendsAnalyzer.mjs";
import 'dotenv/config'

// Establish connection to the MySQL database using sequelize
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_USER_PASS,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT,
        logging: false
    }
)

const User = userModel(sequelize, DataTypes)

let initDb = () => {
    return sequelize
            .sync({force: true})
            .then((_) => {
                importUser();
                console.log("The database was synced")
            })
}

const importUser = () => {
    bcrypt
        .hash(process.env.IMPORT_USER_PASS, 10)
        .then((hash) => {
            User.create({
                username: process.env.IMPORT_USER_NICKNAME,
                email: process.env.IMPORT_USER_EMAIL,
                password: hash
            }) 
        })
}


export { initDb, User }