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
    rating: {
        type: Sequelize.FLOAT,
    },
    price: {
        type: Sequelize.FLOAT,
    },

});

module.exports = Helper;