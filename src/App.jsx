import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "./App.css";
import Formulario from "./components/Formulario";
import Lista from "./components/Lista";

function App() {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    consultarAPI("");
  }, []);

  const consultarAPI = async (categoriaSeleccionada) => {
    try {
      const respuesta = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=${categoriaSeleccionada}&apiKey=72f84f7c14754936a842fd3856e7d76a`
      );
      const datos = await respuesta.json();
      setNoticias(datos.articles || []);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="text-center">
      <h1>Noticias</h1>
      <hr />
      <Formulario consultarAPI={consultarAPI} />
      <Lista noticias={noticias} />
    </Container>
  );
}

export default App;