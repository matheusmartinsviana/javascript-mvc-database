const City = require('../model/city');

class CityController {
    async createCity(name, acronymState, area, numPeople) {
        if (
            name === undefined
            || acronymState === undefined
            || area === undefined
            || numPeople === undefined
        ) {
            throw new Error('Name, acronymState, area and numPeople are required');
        }

        // INSERT INTO city (name, acronymState, area, numPeople) VALUES (name, acronymState, area, numPeople);
        const city = await City
            .create({ name, acronymState, area, numPeople });

        return city;
    }

    async findById(id) {
        if (id === undefined) {
            throw new Error('id is required');
        }

        const city = await City.findByPk(id);

        if (!city) {
            throw new Error('City not found');
        }

        return city;
    }

    async updateCity(id, name, acronymState, area, numPeople) {
        if (
            id === undefined
            || name === undefined
            || acronymState === undefined
            || area === undefined
            || numPeople === undefined
        ) {
            throw new Error('id, name, acronymState, area and numPeople are required');
        }

        const city = await this.findById(id);

        city.name = name;
        city.acronymState = acronymState;
        city.area = area;
        city.numPeople = numPeople;

        // UPDATE city SET name = name, acronymState = acronymState, area = area, numPeople = numPeople WHERE id = id;
        city.save();

        return city;
    }

    async deleteCity(id) {
        if (id === undefined) {
            throw new Error('id is required');
        }

        const city = await this.findById(id);

        city.destroy();
    }

    async listCity() {
        return City.findAll();
    }
}

module.exports = CityController;