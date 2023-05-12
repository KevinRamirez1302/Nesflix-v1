import { Secciondiv, Titulo, VideoContain } from "./styles"
import VideoCard from "../Videocard/videoCard";

const Seccion = (props) => {

    const {Nombre,SecondaryColor,PrimaryColor} = props.datos
    const {videos} = props

    return <Secciondiv style={{backgroundColor: PrimaryColor}}>
        <Titulo style={{borderColor:SecondaryColor}}>{Nombre}</Titulo>
        <VideoContain>
            {
                videos.map(({IMG,titulo,categoria,url}) => { 
                    return <VideoCard
                        key={titulo}
                        img={IMG}
                        titulo= {titulo}
                        categoria={categoria}
                        url={url}
                    /> })
                    
            }
        </VideoContain>
    </Secciondiv>
}

export default Seccion