import React from 'react';

const WeatherDetails = ({ forecast }) => {
  if (!forecast || !forecast.forecastday) return null;

  return (
    <div className="weather-details">
      {forecast.forecastday.map((day, index) => (
        <div key={index}>
          <p>{day.day.avgtemp_c}°C</p>
          <p>{day.day.condition.text}</p>
        </div>
      ))}
    </div>
  );
};

export default WeatherDetails;
