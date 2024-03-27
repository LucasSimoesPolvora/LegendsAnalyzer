import { Sequelize, DataTypes } from "sequelize";
import bcrypt from "bcrypt"

// Establish connection to the MySQL database using sequelize
const sequelize = new Sequelize(
    "db_legendsAnalyzer",
    process.env.DB_USER,
    process.env.DB_USER_PASS,
    {
        host: "localhost",
        port: 6033,
        dialect: "mysql",
        logging: false
    }
)

