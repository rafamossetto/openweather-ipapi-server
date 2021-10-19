const { Router } = require('express');
const router = Router();
const axios = require('axios').default;
const { IP_API_URL, WEATHER_API_URL, CITYS_IP } = require('../data');

router.get('/', async (req, res) => {
    const { city } = req.query;
    if (!city) {
        try {
            const response = await axios.get(IP_API_URL);
            return res.json(response.data);
        } catch (error) {
            return res.status(error.response.status).json({ error: error.message })
        }
    }
    try {
        const response = await axios.get(`${IP_API_URL}/${CITYS_IP[city]}`);
        return res.json(response.data);
    } catch (error) {
        return res.status(error.response.status).json({ error: error.message })
    }
})


module.exports = router;