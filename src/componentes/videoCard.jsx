import styled from "styled-components";
import testimg from './portada.jpg'

const VideoCard = () => {

    const Div = styled.div `
        display: flex;
        flex-direction: column;
        width: 30%;
    `
    const Titulo = styled.h5`
        font-weight: bold;
        font-size: 1.1rem;
    `

    const Img = styled.img `
    border-radius: 7px;
        
    `



    return <Div>
        <Img src= {testimg} alt="" />
        <Titulo>New super mario bros gameplay how to make a victory</Titulo>
        <p>Categoria</p>
    </Div>
}

export default VideoCard