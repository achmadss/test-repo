import Sequelize from "sequelize"
import mysql from "mysql2/promise"

let database = 'test_db'
let user = 'root'
let password = 'password'

let host = 'test-mysql'
let dialect = 'mysql'
let port = 3306

const db = new Sequelize(
    "",
    user,
    password, 
    {
        host:host,
        dialect:dialect,
        port:port,
    }
)

async function initDB() {
    try {
        await db.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`)
        await db.authenticate()
        await db.sync().then(() => {
            console.log("Synced db.");
        })
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    
}

export { initDB, db }