const express = require('express');
const db = require('../../models');
const Jobs = require('../../models/jobs');

const router = express.Router();

router.post('/', (req, res, next) => {
    Jobs.create({
        subject: req.body.subject,
        description: req.body.description,
        helpeeId: req.user.id,
    })
        .then(job => res.json(job))
})

router.delete('/', (req, res, next) => {
    Jobs.delete(req.body)
        .then(job => res.send(job))
})

module.exports = router;