import React, { useState } from 'react';

const WeatherSearch = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    onSearch(city);
    setCity('');
  };

  return (
    <div className="weather-search">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Город"
      />
      <button onClick={handleSearch}>Поиск</button>
    </div>
  );
};

export default WeatherSearch;
