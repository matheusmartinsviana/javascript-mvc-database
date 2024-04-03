const database = require('../config/database');

class User {
    constructor() {
        this.model = database.define('users', {
            id: {
                type: database.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: database.Sequelize.STRING
            },
            email: {
                type: database.Sequelize.STRING
            },
            senha: {
                type: database.Sequelize.STRING
            }
        });
    }
}

module.exports = (new User).model;