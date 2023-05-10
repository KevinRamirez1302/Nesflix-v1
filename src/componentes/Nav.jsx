import styled from "styled-components"
import {RiMovieLine} from 'react-icons/ri'
import { Link } from "react-router-dom"
import { motion } from "framer-motion" 


const Navbar = () => {

    const Nav = styled.nav `
    display: flex;
    background-color: #2d2d2d;
    justify-content: space-between;
    height: 6rem;
    padding: 0 7rem 0 3rem;
    align-items: center;
    `

    const LinkSty = styled(Link) `
       text-decoration: none;
      margin: 1rem;
       font-weight: bold;
       color: white;
      font-size: 1.4rem;
       transition: all 300ms;
       :hover{
         color: #006fff;
         
      }
      `

    const Ul = styled.ul`
        display: flex;
    `
    const Titulo = styled.a`
        text-decoration:  none;
        font-size: 2.5rem;
        font-weight: bold;
        color: #006fff;
    `

    const Li = styled.li`
        
        list-style: none;
       
    `

    const Span = styled.span`
        color: #FFFFFF;
        font-size: 2rem;
        margin-right: .6rem;
    `

    const Div = styled.div `
        display: flex;
        align-items: center;
    `
    


    return <Nav action="">

        <Div>
        <Titulo href="/">Nes<Span>flix</Span></Titulo>
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
            <Li><LinkSty to="Videos">Videos</LinkSty></Li>
        </Ul>

    </Nav>

}

export default Navbar