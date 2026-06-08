const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { request } = require('node:http')

app.use(bodyParser.urlencoded({extended: true}))

app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Parabens. Usuario Incluido!</h1>')
})

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Parabens. Usuario alterado!</h1>')
})

app.listen(5500)