import {RiMovieLine} from 'react-icons/ri'
import { motion } from "framer-motion"
import { Nav,LinkSty,A,Ul,Titulo,Li,Span,Div } from './styles'



const Navbar = (props) => {


    return <Nav action="">

        <Div>
        <motion.div
        whileHover={{rotate:-8}}
        ><Titulo to="/">Nes<Span>flix</Span></Titulo></motion.div>
        <motion.div 
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
        ><RiMovieLine color="#408d86" size= {40} /></motion.div>
      </Div>
        
        <Ul>
           <motion.div
           whileHover={{ scale: [null, 1, 1.1] }}
           transition={{ duration: 0.3 }}
           ><Li><LinkSty to="Addvideo">Add Movie</LinkSty></Li></motion.div> 
           <motion.div
           whileHover={{ scale: [null, 1, 1.1] }}
           transition={{ duration: 0.3 }}
           > <Li><A href="Videos">Videos</A></Li></motion.div>
        </Ul>

    </Nav>

}

export default Navbar