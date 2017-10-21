const db = require('./_db');
const helper = require('./helper');
const helpee = require('./helpee');
const jobs = require('./jobs');

jobs.belongsTo(helpee);
// associations

module.exports = db;
