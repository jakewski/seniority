const express = require('express');
const db = require('../../models');
const Helper = require('../../models/helper')
const geolib = require('geolib')

const router = express.Router();

function checkDist(lat1, long1, lat2, long2){
    return geolib.getDistance(
        {latitude: lat1, longitude: long1},
        {latitude: lat2, longitude: long2}
    ) / 1000
}

router.get('/', (req, res, next) => {
    Helper.findAll()
        .then(helpers => {
            res.send(helpers);
        })
})

router.get('/available/:lat/:long', (req, res, next) => {
    console.log('hit')
    Helper.findAll({
        where: {
            availability: true,
        }
    })
    .then(helpers => {
        helpers = helpers.filter(helper => {
            let dist = checkDist(req.params.lat, req.params.long, helper.location[0], helper.location[1])
            console.log(dist, helper.radius);
            return dist < helper.radius
        })
        res.send(helpers);
    })
})

router.get('/available', (req, res, next) => {
    Helper.findOne({
        where: {
            id: req.user.id,
        }
    })
    .then(guy => {
        guy.update({
            availability: true,
        })
        .then(() => {
            res.sendStatus(200);
        })
    })
})

module.exports = router;