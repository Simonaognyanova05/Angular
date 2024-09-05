const mongoose = require('mongoose');
const Car = require('./models/Car');

const dbUrl = 'mongodb+srv://simonaognanova05:uFQaPySD5cy5XFri@react-task.hujfarb.mongodb.net/test';


const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function getCars(res, res) {
    await mongoose.connect(dbUrl, connectionParams);

    try {
        const car = await Car.find({});

        return car;
    } catch (e) {
        throw e;
    }
};

module.exports = { getCars };