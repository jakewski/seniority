const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./models');
const PORT = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res, next) {
    res.sendFile(path.join(__dirname, './index.html'));
});

app.use(function (err, req, res, next) {
    console.error(err, err.stack);
    res.status(500).send(err);
});
db.sync({force: true})
    .then(() => {
        const server = app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`))
    })

module.exports = app;