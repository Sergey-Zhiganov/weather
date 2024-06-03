import axios from 'axios';

const API_KEY = '69be5664504e4ae186b103045240306';
const BASE_URL = 'http://api.weatherapi.com/v1';

export const fetchCurrentWeather = (city) => {
  return axios.get(`${BASE_URL}/current.json?key=${API_KEY}&q=${city}`);
};

export const fetchWeeklyForecast = (city) => {
  return axios.get(`${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=7`);
};
