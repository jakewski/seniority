const Sequelize = require('sequelize');
const db = require('./_db');

const Jobs = db.define('jobs', {
    name: {
       type: Sequelize.STRING,
       allowNull: false,
    },
    description: {
        type: Sequelize.TEXT,
    },
    helpeeId: {
        type: Sequelize.INTEGER,
    }
})

module.exports = Jobs;