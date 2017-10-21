const express = require('express');
const db = require('../../models');

const router = express.Router();
const { makeAccount } = require('../auth/firebase');

router.get('/', (req, res, next) => {

})
// router.post('/', (req, res, next) => {
//     let email = req.body.email
//     let password = req.body.password
//     makeAccount(email, password)

// })
module.exports = router;