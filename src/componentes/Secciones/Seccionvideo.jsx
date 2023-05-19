import { Secciondiv, Titulo, VideoContain } from "./styles"
import VideoCard from "../Videocard/videoCard";

const Seccion = (props) => {

    const {Nombre,SecondaryColor,PrimaryColor} = props.datos
    const {videos, Like, Eliminar} = props

    return <>{
        videos.length  > 0 && 
        <Secciondiv style={{backgroundColor: SecondaryColor}}>
             <Titulo style={{borderColor:PrimaryColor}}>{Nombre}</Titulo>
                <VideoContain>
                 {
                    videos.map(({Img,titulo,categoria,url,Descrip,fav,id}) => { 
                         return <VideoCard
                        key={titulo}
                        img={Img}
                        titulo= {titulo}
                        categoria={categoria}
                        url={url}
                        descripcion={Descrip}
                        datos={props.datos}
                        id={id}
                        fav={fav}
                        Like = {Like}
                        Eliminar={Eliminar}
                    /> })
                    
            }
             </VideoContain>
             </Secciondiv>
}</>

}

export default Seccion