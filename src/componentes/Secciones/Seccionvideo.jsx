import { Secciondiv, Titulo, VideoContain } from "./styles"
import VideoCard from "../Videocard/videoCard";

const Seccion = (props) => {

    const {Nombre,SecondaryColor,PrimaryColor} = props.datos
    const {videos} = props

    return <>{
        videos.length  > 0 && 
        <Secciondiv style={{backgroundColor: SecondaryColor}}>
             <Titulo style={{borderColor:PrimaryColor}}>{Nombre}</Titulo>
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
                        datos={props.datos}
                    /> })
                    
            }
             </VideoContain>
             </Secciondiv>
}</>

}

export default Seccion