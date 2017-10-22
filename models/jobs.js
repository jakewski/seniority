const Sequelize = require('sequelize');
const db = require('./_db');

const Jobs = db.define('jobs', {
    subject: {
       type: Sequelize.STRING,
       allowNull: false,
    },
    description: {
        type: Sequelize.TEXT,
    },
    helpeeId: {
        type: Sequelize.INTEGER,
    },
    inProgress: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
    }
})

module.exports = Jobs;