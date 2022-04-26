const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const route = require('./routes')
const path = require('path')

const morgan = require('morgan')
app.use(bodyParser.json())

app.use(morgan('combined'))

route(app);


dotenv.config({ path: path.join(__dirname, '.env') })
const PORT = process.env.PORT ||3000

app.listen(PORT, ()=>{
    console.log('listening on port 5000')
})