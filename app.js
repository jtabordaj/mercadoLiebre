const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

// Instanciar server

const port = process.env.PORT || 3001;

app.listen(port, () =>
    console.log("Server online, all systems nominal")
)

// Esto para levantarlo en local
// app.listen(3030, () =>
//     console.log("Server online, all systems nominal")
// )

// path

app.get('/', (req, res) => {
    res.sendFile(path.resolve('./views/home.html'))
})

app.get('/register', (req, res) => {
    res.sendFile(path.resolve('./views/register.html'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.resolve('./views/login.html'))
})


