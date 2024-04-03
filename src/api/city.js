const CityController = require('../controller/city');

class CityApi {
    async createCity(req, res) {
        const name = req.body.name
        const acronymState = req.body.acronymState;
        const area = req.body.area;
        const numPeople = req.body.numPeople;
        const controller = new CityController();

        try {
            const city = await controller.createCity(name, acronymState, area, numPeople);
            return res.status(201).send(city);
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }

    async updateCity(req, res) {
        const { id } = req.params;
        const { name, acronymState, area, numPeople } = req.body;
        const controller = new CityController();

        try {
            const city = await controller.updateCity(Number(id), name, acronymState, area, numPeople);
            return res.status(200).send(city);
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }

    async deleteCity(req, res) {
        const { id } = req.params;
        const controller = new CityController();

        try {
            await controller.deleteCity(Number(id));
            return res.status(204).send();
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }

    async listCity(req, res) {
        const controller = new CityController();

        try {
            const citys = await controller.listCity();
            return res.status(200).send(citys);
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }
}

module.exports = CityApi;