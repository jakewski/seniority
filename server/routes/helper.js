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
    console.log(typeof req.user)
    if(req.user && req.user.rating) res.sendfile('public/helper.html')
    else res.redirect('/')
})

router.get('/min/:lat/:long', (req, res, next) => {
    console.log('hit')
    Helper.findAll({
        where: {
            availability: true,
        }
    })
    .then(helpers => {
        let min = helpers[0];
        for(let i in helpers){
            let dist = checkDist(req.params.lat, req.params.long, i.location[0], i.location[1]);
            if(dist < min){
                min = dist;
            }
        }
        res.send(min);
    })
})

router.get('/all/:lat/:long', (req, res, next) => {
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

router.post('/:val', (req, res, next) => {
    console.log('hitski')
    Helper.findOne({
        where: {
            id: req.user.id,
        }
    })
    .then(guy => {
        guy.update({
            availability: req.params.val === '1',
        })
        .then(() => {
            res.sendStatus(200);
        })
    })
})

module.exports = router;