import { DataTypes } from "sequelize/types";
import { db } from "../config/database.js";

const User = db.define('users', {
    // define attr
    id : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name : {
        type: DataTypes.STRING,
    },
    email : {
        type: DataTypes.STRING,
    },
    password : {
        type: DataTypes.STRING,
    }
}, {
    tableName: 'users',
    freezeTableName: true
})

export { User }