import Sequelize from "sequelize"
import mysql from "mysql2/promise"

let database = 'test_db'
let user = 'root'
let password = 'password'

let host = 'mysql-service'
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

async function initDB() {

    // try {
    //     const connection = await mysql.createConnection(
    //         {
    //             host: host,
    //             user: user,
    //             password: password,
    //             database: database
    //         }
    //     )
    //     await connection.connect((err) => {
    //         if (err) {
    //             throw Error(err)
    //         }
    //     }).then(() => {
    //         console.log("connected to db")
    //     })
    // } catch (error) {
    //     console.log(error)
    // }

    try {
        await db.authenticate()
        await db.sync().then(() => {
            console.log("Synced db.");
        })
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    
}

export { initDB, db }