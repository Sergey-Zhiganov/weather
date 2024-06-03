import React, { useEffect, useState } from 'react';
import { fetchCurrentWeather, fetchWeeklyForecast } from './api';
import CityWeather from './components/CityWeather';
import WeatherDetails from './components/WeatherDetails';
import WeatherSearch from './components/WeatherSearch';
import './App.css';

const App = () => {
  const [currentCity, setCurrentCity] = useState('Moscow');
  const [currentWeather, setCurrentWeather] = useState(null);
  const [weeklyForecast, setWeeklyForecast] = useState(null);

  useEffect(() => {
    fetchWeatherData(currentCity);
  }, [currentCity]);

  const fetchWeatherData = async (city) => {
    try {
      const weatherResponse = await fetchCurrentWeather(city);
      const forecastResponse = await fetchWeeklyForecast(city);

      setCurrentWeather(weatherResponse.data);
      setWeeklyForecast(forecastResponse.data);
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };

  return (
    <div className="app">
      <h1>Погода</h1>
      <WeatherSearch onSearch={setCurrentCity} />
      {currentWeather && (
        <CityWeather city={currentCity} weather={currentWeather} />
      )}
      <WeatherDetails forecast={weeklyForecast} />
    </div>
  );
};

export default App;
