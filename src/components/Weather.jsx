import React from 'react';

const Weather = ({ weatherData }) => {
  return (
    <div>
      <h2>Información del clima</h2>
      <p>Ciudad: {weatherData.name}</p>
      <p>País: {weatherData.sys.country}</p>
      <p>Temperatura: {weatherData.main.temp}</p>
      {/* Agrega más detalles del clima según tu necesidad */}
    </div>
  );
};

export default Weather;