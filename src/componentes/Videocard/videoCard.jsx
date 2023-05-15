import { Titulo,Div,Img, DivColor, Division } from "./styles";
const VideoCard = (props) => {

    const {PrimaryColor, SecondaryColor} = props.datos

    return <Div style={{backgroundColor:PrimaryColor}} href={props.url} target="_blank">
        <Division>
        <DivColor style={{backgroundColor:'black'}} />
        <Img src= {props.img} alt="" />
        <Titulo>{props.titulo}</Titulo>
        <p>{props.descripcion}</p>
        </Division>
        
    </Div>
}

export default VideoCard