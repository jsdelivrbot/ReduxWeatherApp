import axios from 'axios';

const API_KEY = 'f856654e83d444d197261ea2ee4cf252';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

    console.log('[index] fetchWeather');

    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}

// http://api.openweathermap.org/data/2.5/forecast?q=London,us&appid=f856654e83d444d197261ea2ee4cf252