import styled from "styled-components"
import {RiMovieLine} from 'react-icons/ri'
import { Link } from "react-router-dom"
import { motion } from "framer-motion" 

const Nav = styled.nav `
    display: flex;
    background-color: #2d2d2d;
    justify-content: space-between;
    height: 4rem;
    padding: 0 15% 0 10%;
    align-items: center;
    @media screen and (max-width:600px) {

        padding: 0 7% 0 7%;
}
    `

    const LinkSty = styled(Link) `
       text-decoration: none;
      margin: 1rem;
       font-weight: bold;
       color: white;
      font-size: 1.3rem;
      border-radius: 7px;
       transition: all 300ms;
       padding: .5rem .3rem;
       
       :hover{
         
         background-color: #006fff;
      }

      @media screen and (max-width:600px) {

        font-size: 1.2rem;
      }

      
      `

const A = styled.a `
text-decoration: none;
margin: 1rem;
font-weight: bold;
color: white;
font-size: 1.3rem;
border-radius: 7px;
transition: all 300ms;
padding: .5rem .3rem;

:hover{
  
  background-color: #006fff;
}
@media screen and (max-width:600px) {

font-size: 1.2rem;
}

`

    const Ul = styled.ul`
        display: flex;
    `
    const Titulo = styled(Link)`
        text-decoration:  none;
        font-size: 2.5rem;
        font-weight: bold;
        color: #006fff;
        @media screen and (max-width:600px) {

font-size: 1.7rem;
}
    `

    const Li = styled.li`
        
        list-style: none;
       
    `

    const Span = styled.span`
        color: #FFFFFF;
        font-size: 2rem;
        margin-right: .6rem;
        @media screen and (max-width:600px) {

font-size: 1.5rem;
}
    `

    const Div = styled.div `
        display: flex;
        align-items: center;
    `


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