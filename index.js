
const express = require('express')
// const serverless = require('serverless-http')
const userRouter = require('./router')
const port = process.env.PORT | 3000
const app = express()

app.use(express.json())

const router = new express.Router()

app.use(userRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})



module.exports.handler = serverless(app)


