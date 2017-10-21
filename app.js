const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./models');
const PORT = process.env.PORT || 8080;

//import routes
const helpeeRouter = require('./server/routes/helpee');
const helperRouter = require('./server/routes/helper');
const loginRouter = require('./server/routes/login');
const registerRouter = require('./server/routes/helpee');

const app = express();

//register routes
app.use('/helpee', helpeeRouter);
app.use('/helper', helperRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res, next) {
    res.sendFile(path.join(__dirname, 'public/index-contact.html'));
});

app.use(function (err, req, res, next) {
    console.error(err, err.stack);
    res.status(500).send(err);
});

db.sync({force: true})
    .then(() => {
        const server = app.listen(PORT, () => console.log(`Helping seniors on port ${PORT}`))
    })

module.exports = app;