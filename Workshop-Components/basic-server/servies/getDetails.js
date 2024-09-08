const mongoose = require('mongoose');
const Car = require('./models/Car');

const dbUrl = 'mongodb+srv://simonaognanova05:uFQaPySD5cy5XFri@react-task.hujfarb.mongodb.net/test';


const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function getDetails(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    let carId = req.params.carId;
    try {
        const car = await Car.findById(carId);

        return car;
    } catch (e) {
        throw e;
    }
};

module.exports = { getDetails };