import "./App.css";
import Navbar from "./componentes/Navbar/Nav";
import { Container } from "@mui/material";
import styled from "styled-components";
import Formulario from "./componentes/Form/Formulario";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import { Front } from "./componentes/Front/front";
import { SketonVi } from "./componentes/Skeleton/skeleton";
import Seccion from "./componentes/Secciones/Seccionvideo";
import Agregado from "./componentes/finishAdd/Agregado";

 //ESTILOS 
 
 const VideoContainer = styled.div`
   
 `;

 const SkeletonContainer = styled.div `
 display: flex;
 gap: 2rem;
 flex-wrap: wrap;
 justify-content: center;
 padding: 7% 14% 7% 14%;
 `



function App() {
  const [videos, setVideos] = useState([])
  
  const [loading,setLoading] =useState(false)

  const [load,setLoad] = useState(false)

  const Secciones = [
    {
      Nombre: 'javascript',
      PrimaryColor:'#FFD700' ,
      SecondaryColor: '#FDFDBD',
    },
    {
      Nombre: 'Front End',
      PrimaryColor:'#8A2BE2' ,
      SecondaryColor: '#E5E0FF',
    },
    {
      Nombre: 'Back End',
      PrimaryColor:'#7FFF00' ,
      SecondaryColor: '#CEEDC7',
    },
    {
      Nombre: 'Fetch',
      PrimaryColor:'#7FFF00' ,
      SecondaryColor: '#B7C4CF',
    },
    {
      Nombre: 'Tips',
      PrimaryColor:'#E6BA95' ,
      SecondaryColor: '#FAFDD6',
    },
    {
      Nombre: 'Videojuegos',
      PrimaryColor:'#5F9EA0' ,
      SecondaryColor: '#20B2AA',
    }
  ]

   // FETCH
  const Data = async() => {
    try {
      axios.get('http://localhost:4000/peliculas').then(res => setVideos(res.data) )
      setLoading(true)
      console.log('render FETCH')
     }
     catch {}
  }

  
  useEffect(()=> {
    setTimeout(()=>{
      Data()
      console.log('RENDER USE EFFECT')
    },3000)
    
   
 },[])

  
  //RECIBIR DATOS DE FORM


  const recibirDatos = async(datos) => {
    
  await axios.post(('http://localhost:4000/peliculas'),datos)
    try{
      setVideos([...videos, datos]);
      setLoad(true)
    }
    catch{}
    
  };

  

  const Like = (id) => {
        console.log('Like' + id)
        const newFav = videos.map((datos) => {
          if(datos.id === id) {
            datos.fav = !datos.fav
          }
           return datos
        } ) 
        setVideos(newFav)
    }

    const Eliminar = (id) => {
      console.log("su id es" + id)
      const videosNew = videos.filter((datos) => datos.id !== id )
      setVideos(videosNew)

    }
    
  
    
  return (
    <>
      <Router>
        <Navbar   />

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
              loading === false ? <SkeletonContainer>
                <SketonVi/>
              </SkeletonContainer>  : <VideoContainer>

                {Secciones.map((datos) => <Seccion 
                datos={datos} 
                key={datos.Nombre}
                videos={videos.filter(video => video.categoria === datos.Nombre.toLowerCase())}
                Like={Like}
                Eliminar={Eliminar}
                /> 
                )}
           </VideoContainer>
              }
            
          />
          <Route path="success" element={<Agregado />} />
          <Route path="/" element={ <Front />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
