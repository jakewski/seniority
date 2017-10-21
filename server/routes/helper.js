const express = require('express');
const db = require('../../models');
const Helper = require('../../models/helper')

const router = express.Router();

router.get('/', (req, res, next) => {
    Helper.findAll()
        .then(helpers => {
            res.send(helpers);
        })
})

module.exports = router;