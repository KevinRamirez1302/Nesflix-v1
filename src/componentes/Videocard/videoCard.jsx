import styled from "styled-components";

const Div = styled.a`
        display: flex;
        flex-direction: column;
        width: 20%;
        text-decoration: none;
        color: black;

        @media screen and (max-width:600px) {
            width: 70%;
        }
    `

    const Titulo = styled.h5`
        font-weight: bold;
        font-size: 1.1rem;
        color: black;
    `

    const Img = styled.img `
    border-radius: 7px;
        
    `

const VideoCard = (props) => {

    return <Div href={props.url} target="_blank">
        <Img src= {props.img} alt="" />
        <Titulo>{props.titulo}</Titulo>
        <p>{props.categoria}</p>
    </Div>
}

export default VideoCard