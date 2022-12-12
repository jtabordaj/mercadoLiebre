const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

// Instanciar server

app.listen(3030, () =>
    console.log("Server online, all systems nominal")
)

// path

app.get('/', (req, res) => {
    res.sendFile(path.resolve('./views/home.html'))
})


