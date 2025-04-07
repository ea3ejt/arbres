const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const port = 3000;

// Configuració de la base de dades
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'arbres_monumentals'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Conectat a la base de dades');
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

// Rutes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/views/index.html');
});

app.listen(port, () => {
    console.log(`Servidor escoltant a http://localhost:${port}`);
});