const { Sequelize } = require("sequelize")

const db = new Sequelize(
    'test_db',
    'root',
    '270598', 
    {
        host:'test-mysql',
        dialect:'mysql',
        port:3306,
    }
)

export { db }