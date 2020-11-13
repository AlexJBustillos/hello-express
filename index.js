const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('Hello, FROM THE MATRIX')
});

app.listen(8000);