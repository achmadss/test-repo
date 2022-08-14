const Sequelize = require("sequelize")
const db = require("../config/database")

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