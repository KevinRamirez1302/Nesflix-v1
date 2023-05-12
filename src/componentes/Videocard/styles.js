import styled from "styled-components";

  export const Div = styled.a`
        display: flex;
        flex-direction: column;
        width: 20%;
        text-decoration: none;
        color: black;
        background-color: white;
        padding: 2rem 1rem;
        border-radius: 7px;
        @media screen and (max-width:600px) {
            width: 70%;
        }
    `

   export const Titulo = styled.h5`
        font-weight: bold;
        font-size: 1.1rem;
        color: black;
    `

    export const Img = styled.img `
    border-radius: 7px;
        
    `