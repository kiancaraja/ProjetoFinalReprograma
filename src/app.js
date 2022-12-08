require("dotenv").config()
const express = require ("express")
const cors = require("cors")
const database = require("./config/database")

const app = express()

app.use(express.json())
app.use(cors())

app.get("/" , (req, res)=> res.status(200).send("Seja Bem-vinda") )
database.connect()

module.exports = app