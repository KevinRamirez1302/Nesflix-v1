import "./App.css";
import Navbar from "./componentes/Nav";
import VideoCard from "./componentes/videoCard";
import { Container } from "@mui/material";
import styled from "styled-components";
import Formulario from "./componentes/Formulario";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import { Front } from "./componentes/Front/front";


function App() {
  const [videos, setVideos] = useState([])

  const Data = async() => {
    try {
      axios.get('http://localhost:4000/peliculas').then(res => setVideos(res.data) )
     }
     catch {}
  }
  
 useEffect(()=> {

  Data()
  
 },[])


  const recibirDatos = (datos) => {
    
  axios.post(('http://localhost:4000/peliculas'),datos)

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
                 {videos.map(({ nombre, IMG, categoria, url, id }) => (
                  <VideoCard url={url}  img={IMG} titulo={nombre} categoria={categoria} />
                ))} 
              </VideoContainer>
            }
          />
          <Route path="/" element={ <Front />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
