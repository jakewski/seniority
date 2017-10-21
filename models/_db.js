const Sequelize = require('sequelize');

const db = new Sequelize('postgres://localhost:5433/help_me', {
    logging: false
});

module.exports = db;
