const express = require("express");
const app = express()

console.log(app)

// Instanciar server

app.listen(3030, () =>
    console.log("Server online, all systems nominal")
)

// path

const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'))
})

app.get('/public/css', (req, res) => {
    res.sendFile(path.join(__dirname, './public/css'))
})

app.get('/public/img/logo-mercado-liebre.svg', (req, res) => {
    res.sendFile(path.join(__dirname, './public/img/logo-mercado-liebre.svg'))
})