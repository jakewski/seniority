const Sequelize = require('sequelize');
const db = require('./_db');

const Helper = db.define('helper', {
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    availability: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
    },
    skills: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
    },
    location: {
        type: Sequelize.ARRAY(Sequelize.FLOAT),
    },
    radius: {
        type: Sequelize.FLOAT,
    },
    rating: {
        type: Sequelize.FLOAT,
    },
    price: {
        type: Sequelize.FLOAT,
    },
    photo: {
        //url or path name?
        type: Sequelize.TEXT,
    },
});

module.exports = Helper;