const express = require('express');
const db = require('../../models');
const Helpee = require('../../models/helpee')

const router = express.Router();

router.get('/', (req, res, next) => {
    Helpee.findAll()
        .then(helpees => {
            res.send(helpees);
        })
})

module.exports = router;