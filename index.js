import express from "express"
import { Routes } from "./routes/routes.js"
import { initDB, authAndSync } from "./config/database.js"

const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(Routes)

initDB().then(authAndSync())

app.listen(port, () => {
  console.log(`Test app listening on port ${port}`)
})