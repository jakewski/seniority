const Sequelize = require('sequelize');
const db = require('./_db');
const crypto = require('crypto')

const Helper = db.define('helper', {
    name: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    salt: {
        type: Sequelize.STRING,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    availability: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
    },
    skills: {
        type: Sequelize.ARRAY(Sequelize.STRING),
    },
    location: {
        type: Sequelize.ARRAY(Sequelize.FLOAT),
    },
    radius: {
        type: Sequelize.FLOAT,
    },
    rating: {
        type: Sequelize.FLOAT,
        defaultValue: 1,
    },
    price: {
        type: Sequelize.FLOAT,
    },
    photo: {
        //url or path name?
        type: Sequelize.STRING,
    },
});

Helper.prototype.correctPassword = function (candidatePwd) {
  return Helper.encryptPassword(candidatePwd, this.salt) === this.password
}

Helper.generateSalt = function () {
  return crypto.randomBytes(16).toString('base64')
}

Helper.encryptPassword = function (plainText, salt) {
  return crypto.createHash('sha1').update(plainText).update(salt).digest('hex')
}

const setSaltAndPassword = helper => {
  if (helper.changed('password')) {
    helper.salt = Helper.generateSalt()
    helper.password = Helper.encryptPassword(helper.password, helper.salt)
  }
}

Helper.beforeCreate(setSaltAndPassword)
Helper.beforeUpdate(setSaltAndPassword)

module.exports = Helper;