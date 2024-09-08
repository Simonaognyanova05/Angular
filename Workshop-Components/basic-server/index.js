const express = require('express');
const cors = require('cors');
const { getCars } = require('./servies/getCars');
const { getDetails } = require('./servies/getDetails');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/cars', async (req, res) => {
    let result = await getCars(req, res);
    res.json(result);
})

app.get('/cars/:carId', async (req, res) => {
    let result = await getDetails(req, res);
    res.json(result);
})

app.listen(3000);