const Sequelize = require('sequelize');
const db = require('./_db');

const Helpee = db.define('helpee', {
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    help: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
    },
    location: {
        type: Sequelize.ARRAY(Sequelize.FLOAT),
    }

});

module.exports = Helpee;