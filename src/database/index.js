const Sequelize = require("sequelize");
const dbConfig = require("./config");

const Producer = require("../model/Producer");
const Farm = require("../model/Farm");

const connection = new Sequelize(dbConfig);

Producer.init(connection);
Farm.init(connection);

Farm.associate(connection.models);
Producer.associate(connection.models);

module.exports = connection;
