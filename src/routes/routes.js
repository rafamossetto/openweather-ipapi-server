const { Router } = require('express');
const router = Router();
const axios = require('axios');
const { API_KEY } = process.env;

const IP_API_URL = 'https://ip-api.com/json/';
const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;

router.get('/location', async (req, res) => {
    const response = await axios.get(IP_API_URL);
    res.json(response.data);
})


router.get('/current/:city?', async (req, res) => {
    const { city } = req.params;
    if (city) {
        const request = `${WEATHER_API_URL}&q=${city}`;
        try {
            const response = await axios.get(request);
            return res.json(response.data);
        } catch (error) {
            console.log(error);
            return res.json(error)
        }
    }
    return res.send('No hay city')
})


module.exports = router;