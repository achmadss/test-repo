import Sequelize from "sequelize"
import mysql from "mysql2"

let database = 'test_db'
let username = 'root'
let password = 'password'

let host = 'test-mysql'
let dialect = 'mysql'
let port = 3306

const db = new Sequelize(
    database,
    username,
    password, 
    {
        host:host,
        dialect:dialect,
        port:port,
    }
)

async function initDB() {
    // create db if not exist
    const connection = await mysql.createConnection({ host, port, user, password })
    connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`)
}

async function authAndSync() {
    try {
        await db.authenticate().then(() => {
            db.sync().then(() => {
                console.log("Synced db.");
            })
        })

    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

export { initDB, authAndSync, db }