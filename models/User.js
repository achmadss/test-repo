import Sequelize from "sequelize"
import { db } from "../config/database.js"

const User = db.define('users', {
    // define attr
    id : {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name : {
        type: Sequelize.STRING,
    },
    email : {
        type: Sequelize.STRING,
    },
    password : {
        type: Sequelize.STRING,
    }
}, {
    tableName: 'users',
    freezeTableName: true
})

export { User }