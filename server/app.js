const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '../public')));

app.use('/recipients', require('./routers/recipients-router'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

module.exports = app;