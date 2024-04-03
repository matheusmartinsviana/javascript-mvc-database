const Sequelize = require('sequelize');

const database = new Sequelize(
    'javascript_mvc',
    'root',
    '',
    { host: 'localhost', dialect: 'mysql' }
)

module.exports = database;