import Sequelize from "sequelize"

const db = new Sequelize(
    'test_db',
    'root',
    'password', 
    {
        host:'test-mysql',
        dialect:'mysql',
        port:3306,
    }
)

export { db }