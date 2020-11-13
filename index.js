const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('Hello, FROM THE MATRIX')
});

app.get('/about', function(req, res) {
    res.send('This is about a page about pages about a page.');
});

app.get('/blog', (req, res) => {
    res.send('Welcome to QUEENS!!');
});

app.listen(8000);