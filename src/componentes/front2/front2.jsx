import { Sections,Div, Imagen, Titulo, Parrafo } from "./styles"
import {motion} from 'framer-motion'

import { useRef } from "react"


const FrontTwo = () => {
    return <>
        <Sections>
            <Div>
            <Titulo>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Titulo>
            <Parrafo>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quod placeat debitis. Harum quam id explicabo placeat alias consequuntur, reiciendis quod deserunt magnam non suscipit pariatur, distinctio repellendus molestias sed.</Parrafo>
        </Div>

         <Div>
                <Imagen src="https://www.altamira.ai/wp-content/uploads/2019/09/Full-Stack-DeveloperArtboard-1.png" alt="" />
        </Div>
            
        </Sections>
    </>
}

export default FrontTwo