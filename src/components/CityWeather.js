import React from 'react';

const CityWeather = ({ city, weather }) => {
  if (!weather) return null;

  return (
    <div className="city-weather">
      <h2>{city}</h2>
      <p>{weather.current.temp_c}°C</p>
      <p>{weather.current.condition.text}</p>
    </div>
  );
};

export default CityWeather;
