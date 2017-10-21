const express = require('express');
const db = require('../../models');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log(req.user)
    res.send(req.user);
})

module.exports = router;