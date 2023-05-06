import "./App.css";
import Navbar from "./componentes/Nav";
import VideoCard from "./componentes/videoCard";
import { Container } from "@mui/material";
import styled from "styled-components";
import Formulario from "./componentes/Formulario";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [videos, setVideos] = useState([
    {
      nombre: "Mario bros pelicula",
      Descrip: "ashdhadbasdkjasbksdskabdjbadbaskdkjbsad",
      url: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/12/all-of-goku-s-forms-in-dragon-ball-ranked-by-impact.jpg",
      categoria: "Comedia",
    },
  ]);

  const recibirDatos = (datos) => {
    console.log("colaborador registrado" + datos);
    setVideos([...videos, datos]);
  };

  const VideoContainer = styled.div`
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: center;
    padding: 7% 14% 7% 14%;
  `;

  return (
    <>
      {" "}
      <Router>
        <Navbar />

        <Routes>
          <Route
            path="AddVideo"
            element={
              <Container maxWidth="sm">
                <Formulario recibirDatos={recibirDatos} />
              </Container>
            }
          />
          <Route
            path="videos"
            element={
              <VideoContainer>
                {videos.map(({ nombre, url, categoria }) => (
                  <VideoCard img={url} titulo={nombre} categoria={categoria} />
                ))}
              </VideoContainer>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
