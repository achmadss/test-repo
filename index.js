import { Routes } from "./routes/routes.js";

const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(Routes)

app.listen(port, () => {
  console.log(`Test app listening on port ${port}`)
})