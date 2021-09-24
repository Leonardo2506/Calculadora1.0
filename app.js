const { request, response } = require('express')
const express = require('express')
const app = express()
const Port = process.env.PORT||5000
const math = require ('mathjs')

app.use(express.json())

app.use('/matriz', require('./endpoints/matriz'))
app.use('/numeros', require('./endpoints/numeros'))

app.listen(Port, () => {
    console.log()
})