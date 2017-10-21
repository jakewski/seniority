const express = require('express');
const db = require('../../models');
const Jobs = require('../../models/jobs');

const router = express.Router();

router.post('/', (req, res, next) => {
    Jobs.create(req.body)
        .then(guy => res.json(guy))
})

router.delete('/', (req, res, next) => {
    Jobs.delete(req.body)
        .then(guy => res.send(guy))
})

module.exports = router;