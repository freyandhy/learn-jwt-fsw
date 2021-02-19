const express = require('express')
const app = express()
const passport = require('./lib/passport')
const router = require('./router')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(passport.initialize())

app.use(router)

app.listen(3000, () => console.log("Server ready!"))