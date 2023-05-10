import styled from "styled-components";

const VideoCard = (props) => {

    const Div = styled.a`
        display: flex;
        flex-direction: column;
        width: 30%;
        text-decoration: none;
    `
    const Titulo = styled.h5`
        font-weight: bold;
        font-size: 1.1rem;
    `

    const Img = styled.img `
    border-radius: 7px;
        
    `

    return <Div href={props.url} target="_blank">
        <Img src= {props.img} alt="" />
        <Titulo>{props.titulo}</Titulo>
        <p>{props.categoria}</p>
    </Div>
}

export default VideoCard