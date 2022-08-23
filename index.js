import express from "express"
import { Routes } from "./routes/routes.js"
// import { initDB } from "./config/database.js"

const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// app.use(Routes)

Routes.get('/', (req, res) => {
  res.send('Hello World!!')
})

// initDB()

app.listen(port, () => {
  console.log(`Test app listening on port ${port}`)
})