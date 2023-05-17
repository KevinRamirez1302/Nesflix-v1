import { Titulo,Div,Img, DivColor, Division } from "./styles";
const VideoCard = (props) => {

    const {PrimaryColor, SecondaryColor} = props.datos

    return <Div  href={props.url} target="_blank">
        <Img src= {props.img} alt="" />
        <Division>
            <Titulo>{props.titulo}</Titulo>
            <p>{props.descripcion}</p>
        </Division>
        
        
        
    </Div>
}

export default VideoCard