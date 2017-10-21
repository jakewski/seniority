const Sequelize = require('sequelize');
const db = require('./_db');
const crypto = require('crypto')

const Helpee = db.define('helpee', {
    email: {
        type: Sequelize.STRING,
    },
    salt: {
        type: Sequelize.STRING,
    },
    password: {
        type: Sequelize.STRING,
    },
    help: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
    },
    location: {
        type: Sequelize.ARRAY(Sequelize.FLOAT),
    }

});

Helpee.prototype.correctPassword = function (candidatePwd) {
  return Helpee.encryptPassword(candidatePwd, this.salt) === this.password
}

Helpee.generateSalt = function () {
  return crypto.randomBytes(16).toString('base64')
}

Helpee.encryptPassword = function (plainText, salt) {
  return crypto.createHash('sha1').update(plainText).update(salt).digest('hex')
}

const setSaltAndPassword = helpee => {
  if (helpee.changed('password')) {
    helpee.salt = Helpee.generateSalt()
    helpee.password = Helpee.encryptPassword(helpee.password, helpee.salt)
  }
}

Helpee.beforeCreate(setSaltAndPassword)
Helpee.beforeUpdate(setSaltAndPassword)

module.exports = Helpee;