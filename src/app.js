const express = require("express")
const cors = require("cors")
const { notFound, errorHandler } = require("./errors/index.js")

const usersRouter = require("./users/users.router.js")

const app = express()

app.use(express.json())
app.use(cors())

app.use("/", usersRouter)

app.use(notFound)
app.use(errorHandler)

module.exports = app