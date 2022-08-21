import Sequelize from "sequelize"
import mysql from "mysql2"

let database = 'test_db'
let user = 'root'
let password = 'password'

let host = 'test-mysql'
let dialect = 'mysql'
let port = 3306

const db = new Sequelize(
    database,
    user,
    password, 
    {
        host:host,
        dialect:dialect,
        port:port,
    }
)

const initDB = async () => {
    // create db if not exist
    const connection = mysql.createConnection({ host, port, user, password })
    connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`)
    // authenticate and sync
    try {
        await db.authenticate().then(() => {
            console.log('Connection has been established successfully.');
        })
        
        await db.sync().then(() => {
            console.log("Synced db.");
        })

    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

export { initDB, db }