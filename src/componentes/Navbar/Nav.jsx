import {RiMovieLine} from 'react-icons/ri'
import { motion } from "framer-motion"
import { Nav,LinkSty,A,Ul,Titulo,Li,Span,Div } from './styles'



const Navbar = (props) => {


    return <Nav action="">

        <Div>
        <Titulo to="/">Nes<Span>flix</Span></Titulo>
        <motion.div 
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
        ><RiMovieLine color="white" size= {40} /></motion.div>
      </Div>
        
        <Ul>
            <Li><LinkSty to="Addvideo">Add Movie</LinkSty></Li>
            <Li><A href="Videos">Videos</A></Li>
        </Ul>

    </Nav>

}

export default Navbar