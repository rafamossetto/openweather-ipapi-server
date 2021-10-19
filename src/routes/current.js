const { Router } = require('express');
const router = Router();
const axios = require('axios').default;
const { IP_API_URL, WEATHER_API_URL, CITYS_IP } = require('../data');

router.get('/:city?', async (req, res) => {
    const { city } = req.params;

    if (!city) {
        try {
            const responseIpApi = await axios.get(IP_API_URL);
            const { city, countryCode } = responseIpApi.data;

            const responseOpenWeather = await axios.get(`${WEATHER_API_URL()}&q=${city},${countryCode}`);

            return res.json({
                location: responseIpApi.data,
                weather: responseOpenWeather.data
            });
        } catch (error) {
            console.log(error);
            return res.json(error.message)
        }
    }
    try {
        const responseIpApi = await axios.get(`${IP_API_URL}/${CITYS_IP[city]}`);
        if (responseIpApi.data.status === 'fail') {
            throw new Error(responseIpApi.data.message)
        }
        const { countryCode } = responseIpApi.data;

        const responseOpenWeather = await axios.get(`${WEATHER_API_URL()}&q=${city},${countryCode}`);

        return res.json({
            location: responseIpApi.data,
            weather: responseOpenWeather.data
        });
    } catch (error) {
        return res.status(error.response?.status || 404).json({ error: error.message })
    }
})

module.exports = router;