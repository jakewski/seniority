const express = require('express');
const db = require('../../models');

const router = express.Router();

router.get('/', (req, res, next)=>{
    console.log('hit')
    res.sendfile('public/register.html')
})

module.exports = router;