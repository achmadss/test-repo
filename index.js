const express = require('express')
// const Routes = require('./routes/routes')
// const db = require("./config/database")

const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Hello World')
})

// app.use(Routes)

// connectDb().then(() => {
//     db.sync()
//     .then(() => {
//         console.log("Synced db.");
//     })
//     .catch((error) => {
//         console.error("Failed to sync db: ", error);
//     })
// })

// async function connectDb() {
//     try {
//         await db.authenticate()
//         console.log('Connection has been established successfully.');
//     } catch (error) {
//         console.error('Unable to connect to the database:', error);
//     }
// }

app.listen(port, () => {
  console.log(`Test app listening on port ${port}`)
})