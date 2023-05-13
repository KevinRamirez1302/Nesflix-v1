import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav `
    display: flex;
    background-color: #2d2d2d;
    justify-content: space-between;
    height: 4rem;
    padding: 0 15% 0 10%;
    align-items: center;
    box-sizing: border-box;
    @media screen and (max-width:600px) {

        padding: 0 7% 0 7%;
}
    `

   export const LinkSty = styled(Link) `
       text-decoration: none;
       margin: 1rem;
       font-weight: bold;
       color: white;
       font-size: 1.3rem;
       border-radius: 7px;
       transition: all 300ms;
       padding: .5rem .5rem;
       background-color: #006fff;
       :hover{
         
        
      }

      @media screen and (max-width:600px) {

        font-size: 1.2rem;
      }

      
      `

export const A = styled.a `
text-decoration: none;
margin: 1rem;
font-weight: bold;
color: white;
font-size: 1.3rem;
border-radius: 7px;
transition: all 300ms;
padding: .5rem .3rem;
background-color: #006fff;

:hover{
  
  
}
@media screen and (max-width:600px) {

font-size: 1.2rem;
}

`

   export const Ul = styled.ul`
        display: flex;
    `
    export const Titulo = styled(Link)`
        text-decoration:  none;
        font-size: 2.5rem;
        font-weight: bold;
        color: #006fff;
        @media screen and (max-width:600px) {

font-size: 1.7rem;
}
    `

   export const Li = styled.li`
        
        list-style: none;
       
    `

   export const Span = styled.span`
        color: #FFFFFF;
        font-size: 2rem;
        margin-right: .6rem;
        @media screen and (max-width:600px) {

font-size: 1.5rem;
}
    `

  export  const Div = styled.div `
        display: flex;
        align-items: center;
    `
