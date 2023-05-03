import './App.css';
import Navbar from './componentes/Nav';
import VideoCard from './componentes/videoCard';
import styled from 'styled-components';

function App() {

  const VideoContainer = styled.div`
    display: flex;
    gap: 2rem;
     flex-wrap: wrap;
     justify-content: center;
     padding: 7% 14% 7% 14%;
  `

  return <>
  
  <Navbar />
  <VideoContainer>
  <VideoCard />
  <VideoCard />
  <VideoCard />
  <VideoCard />
  <VideoCard />
  <VideoCard />
  </VideoContainer>
 
  
  
  
  </>
}

export default App;
