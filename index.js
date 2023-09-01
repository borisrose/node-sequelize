const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()

app.set('port', process.env.PORT)
app.set('host', process.env.HOST)

app.listen(app.get('port'), () => {
    console.log(`listening on ${app.get('port')}`)
})




