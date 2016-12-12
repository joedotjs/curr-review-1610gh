console.log('RECIPIENTS.JS IS EXECUTING');
const db = require('../_db');
const Sequelize = require('sequelize');

// 1st argument: name of model
// 2nd argument: object with columns
// 3rd argument: object with utilities

const columns = {};

columns.name = {
  type: Sequelize.STRING,
  allowNull: false
};

columns.location = {
  type: Sequelize.STRING,
  allowNull: false
};

const utilities = {};

utilities.instanceMethods = {};
utilities.classMethods = {

  findByLocation: function (locationStr) {
    return this.findAll({
      where: {
        location: locationStr
      }
    });
  }

};

db.define(
  'recipient',
  columns,
  utilities
);