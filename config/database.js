import Sequelize from "sequelize"
import mysql from "mysql2/promise"

let database = 'test_db'
let user = 'root'
let password = 'password'

let host = 'mysql'
let dialect = 'mysql'
let port = 3306

// const db = new Sequelize(
//     "",
//     user,
//     password, 
//     {
//         host:host,
//         dialect:dialect,
//         port:port,
//     }
// )

async function initDB() {

    try {
        const connection = await mysql.createConnection(
            {
                host: host,
                user: user,
                password: password,
                port: port,
            }
        )
        await connection.connect((err) => {
            if (err) {
                throw Error(err)
            }
        })
    } catch (error) {
        console.log(error)
    }

    // try {
    //     await db.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`)
    //     await db.authenticate()
    //     await db.sync().then(() => {
    //         console.log("Synced db.");
    //     })
    // } catch (error) {
    //     console.error('Unable to connect to the database:', error);
    // }
    
}

export { initDB }