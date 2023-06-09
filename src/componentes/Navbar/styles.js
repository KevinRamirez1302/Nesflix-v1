import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav `
    display: flex;
    background-color: #E0F2F1;
    justify-content: space-between;
    height: 4rem;
    padding: 0 15% 0 10%;
    align-items: center;
    box-sizing: border-box;

    @media screen and (max-width:800px) {

        padding: 0 7% 0 7%;
}

    @media screen and (max-width:450px) {

        padding: 0 2% 0 2%;
}


    `

   export const LinkSty = styled(Link) `
       text-decoration: none;
       font-weight: bold;
       color: white;
       font-size: 20px;
       border-radius: 7px;
       transition: all 300ms;
       padding: .4rem 20px;
       background-color: #43A49B;
       :hover{
         
        
      }

      @media screen and (max-width:800px) {

        font-size: 1.2rem;
        padding: .4rem;
      }
      @media screen and (max-width:450px) {

        font-size: 1rem;
        padding: .2rem;
}

      
      `

export const A = styled.a `
text-decoration: none;
margin: 1rem;
font-weight: bold;
color: white;
font-size: 20px;
border-radius: 7px;
transition: all 300ms;
padding: .4rem 20px;
background-color: #43A49B;

:hover{
  
  
}
@media screen and (max-width:800px) {

font-size: 1.2rem;
padding: .4rem;
}

@media screen and (max-width:450px) {

font-size: 1rem;
padding: .2rem;
}

`

   export const Ul = styled.ul`
        display: flex;
    `
    export const Titulo = styled(Link)`
        text-decoration:  none;
        font-size: 2.5rem;
        font-weight: bold;
        color: #408d86;
        @media screen and (max-width:800px) {

        font-size: 1.7rem;
}

        @media screen and (max-width:450px) {

        font-size: 1.5rem;
        
        }
    `

   export const Li = styled.li`
        
        list-style: none;
       
    `

   export const Span = styled.span`
        color: #80CBC4;
        font-size: 2rem;
        margin-right: .6rem;
        @media screen and (max-width:800px) {

font-size: 1.5rem;
}

@media screen and (max-width:450px) {

font-size: 1.5rem;

}
    `

  export  const Div = styled.div `
        display: flex;
        align-items: center;
    `
