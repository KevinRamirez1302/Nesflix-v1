import { Titulo,Div,Img } from "./styles";
const VideoCard = (props) => {

    return <Div href={props.url} target="_blank">
        <Img src= {props.img} alt="" />
        <Titulo>{props.titulo}</Titulo>
        <p>{props.descripcion}</p>
    </Div>
}

export default VideoCard