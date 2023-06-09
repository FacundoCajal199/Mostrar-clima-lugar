import React, { useState } from 'react';
import Form from './components/Form';
import Weather from './components/Weather';
import { Container } from 'react-bootstrap';
import './App.css';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const handleWeatherData = (data) => {
    if (data.cod === '404') {
      setError('No se encontraron datos de la ciudad ingresada.');
      setWeatherData(null);
    } else {
      setWeatherData(data);
      setError('');
    }
  };

  return (
    <Container className='centrar'>
      <h1>Consulta del clima</h1>
      <Form onWeatherData={handleWeatherData} />
      {error && <div>{error}</div>}
      {weatherData && <Weather weatherData={weatherData} />}
    </Container>
  );
};

export default App;