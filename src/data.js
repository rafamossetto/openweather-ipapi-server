const { API_KEY } = process.env;
const IP_API_URL = 'http://ip-api.com/json';
const WEATHER_API_URL = (path = 'weather') => `https://api.openweathermap.org/data/2.5/${path}?appid=${API_KEY}`;

const CITYS_IP = {
    texas: '66.210.151.255',
    chicago: '64.210.29.255',
    kansas: '71.34.196.242',
    florida: '65.182.35.34',
    manhattan: '45.40.81.190'
}

module.exports = {
    API_KEY,
    IP_API_URL,
    WEATHER_API_URL,
    CITYS_IP
}