const database = require('../config/database');

class City {
    constructor() {
        this.model = database.define('citys', {
            id: {
                type: database.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: database.Sequelize.STRING
            },
            acronymState: {
                type: database.Sequelize.STRING
            },
            area: {
                type: database.Sequelize.FLOAT
            },
            numPeople: {
                type: database.Sequelize.INTEGER
            }
        });
    }
}

module.exports = (new City).model;