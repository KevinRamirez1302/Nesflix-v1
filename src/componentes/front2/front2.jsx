import { Sections, Div, Imagen, Titulo, Parrafo } from "./styles";
import { motion,useAnimation,useInView } from "framer-motion";
import React,{ useEffect,useRef } from "react"

const FrontTwo = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, {once:true});
  const Mostrar = useAnimation()

useEffect(()=>{
  if(isInView) {
    Mostrar.start("visible")
  }

}, [isInView])
  

  return (
    <>
      <Sections>
        <Div ref={ref}>
          <motion.div  
            variants={{
                hidden:{opacity:0, x:75},
                visible:{opacity:1, x:0}
              }}
  
              initial= "hidden"
              animate= {Mostrar}
              transition={{duration:0.5, delay:0.25}}
          >
            <Titulo>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Titulo>
            <Parrafo>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              quod placeat debitis. Harum quam id explicabo placeat alias
              consequuntur, reiciendis quod deserunt magnam non suscipit
              pariatur, distinctio repellendus molestias sed.
            </Parrafo>
          </motion.div>
        </Div>

        <Div ref={ref}>
          <motion.div
          variants={{
            hidden:{opacity:0, y:75},
            visible:{opacity:1, y:0}
          }}

          initial= "hidden"
          animate={Mostrar}
          transition={{duration:0.5, delay:0.25}}
          >
            <Imagen
              src="https://www.altamira.ai/wp-content/uploads/2019/09/Full-Stack-DeveloperArtboard-1.png"
              alt=""
            />
          </motion.div>
        </Div>
      </Sections>
    </>
  );
};

export default FrontTwo;
