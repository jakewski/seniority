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
    if(req.user && req.user.rating) 
        res.sendfile('public/helper.html')
    else res.redirect('/')
})

// router.get('/available/min/:lat/:long', (req, res, next) => {
//     Helper.findAll({
//         where: {
//             availability: true,
//         }
//     })
//     .then(helpers => {
//         let min = helpers[0];
//         for(let i in helpers){
//             if(i){
//                 console.log(i);
//                 if(checkDist(req.params.lat, req.params.long, i.location[0], i.location[1]) < min){
//                     min = i;
//                 }
//             }
//         }
//         res.send(min);
//     })
// })

router.get('/available/:lat/:long', (req, res, next) => {

    Helper.findAll({
        where: {
            availability: true,
        }
    })
    .then(helpers => {
        console.log('guck you')
        let min = helpers[0];
        helpers = helpers.filter(helper => checkDist(req.params.lat, req.params.long, helper.location[0], helper.location[1]) < min)
        res.json(helpers);
    })
})

// router.post('/available/:val', (req, res, next) => {
//     Helper.findOne({
//         where: {
//             id: req.user.id,
//         }
//     })
//     .then(guy => {
//         guy.update({
//             availability: req.params.val === '1',
//         })
//         .then(() => {
//             res.sendStatus(200);
//         })
//     })
// })

module.exports = router;