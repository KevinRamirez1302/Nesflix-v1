import styled from "styled-components"
import {RiMovieLine} from 'react-icons/ri'

const Navbar = () => {

    const Nav = styled.nav `
    display: flex;
    background-color: #2d2d2d;
    justify-content: space-between;
    height: 3.8rem;
    padding: 0 7rem 0 3rem;
    align-items: center;
    box-shadow: 0px 4px 12px 2px rgba(0,0,0,0.65);
    -webkit-box-shadow: 0px 4px 12px 2px rgba(0,0,0,0.65);
    -moz-box-shadow: 0px 4px 12px 2px rgba(0,0,0,0.65);
    `

    const Link = styled.a `
     text-decoration: none;
     margin: 1rem;
     font-weight: bold;
     color: white;
     font-size: 1rem;
     transition: all 300ms;
     :hover{
        color: #006fff;
        font-size: 1.2rem;
     }
     `

    const Ul = styled.ul`
        display: flex;
    `
    const Titulo = styled.a`
        text-decoration:  none;
        font-size: 2rem;
        font-weight: bold;
        color: #006fff;
    `

    const Li = styled.li`
        
        list-style: none;
       
    `

    const Span = styled.span`
        color: #FFFFFF;
        font-size: 1.5rem;
        margin-right: .6rem;
    `

    const Div = styled.div `
        display: flex;
        align-items: center;
    `
    


    return <Nav action="">

        <Div>
        <Titulo href="">Nes<Span>flix</Span></Titulo>
        <RiMovieLine color="white" size= {40} />
        </Div>
        
        <Ul>
            <Li><Link href="#">Add Movie</Link></Li>
            <Li><Link href="#">Videos</Link></Li>
        </Ul>

    </Nav>

}

export default Navbar