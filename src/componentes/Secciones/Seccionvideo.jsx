import { Secciondiv, Titulo, VideoContain } from "./styles"
import VideoCard from "../Videocard/videoCard";

const Seccion = (props) => {

    const {Nombre,SecondaryColor,PrimaryColor} = props.datos
    const {videos} = props

    return <Secciondiv style={{backgroundColor: PrimaryColor}}>
        <Titulo style={{borderColor:SecondaryColor}}>{Nombre}</Titulo>
        <VideoContain>
            {
                videos.map(({Img,titulo,categoria,url,Descrip}) => { 
                    return <VideoCard
                        key={titulo}
                        img={Img}
                        titulo= {titulo}
                        categoria={categoria}
                        url={url}
                        descripcion={Descrip}
                    /> })
                    
            }
        </VideoContain>
    </Secciondiv>
}

export default Seccion