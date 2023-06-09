import React, { useState } from 'react';

const Form = ({ onWeatherData }) => {
  const [location, setLocation] = useState('');
  const [country, setCountry] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid=fb2e7fd57a998181b6f4ed9b3bf49769`
      );

      if (response.ok) {
        const data = await response.json();
        onWeatherData(data);
      } else {
        setError('No se encontraron datos de la ciudad ingresada.');
      }

      setLocation('');
      setCountry('');
    } catch (error) {
      console.error(error);
      setError('Ha ocurrido un error en la solicitud.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ubicación"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <input
        type="text"
        placeholder="País"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <button type="submit">Consultar</button>
      {error && <div>{error}</div>}
    </form>
  );
};

export default Form;