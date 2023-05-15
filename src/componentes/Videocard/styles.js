import styled from "styled-components";

  export const Div = styled.a`
        width: 20%;
        text-decoration: none;
        color: black;
        background-color: white;
        
        border-radius: 7px;
        @media screen and (max-width:600px) {
            width: 70%;
        }
    `

   export const Titulo = styled.h5`
        font-weight: bold;
        font-size: 1.1rem;
        color: black;

        @media screen and (max-width:600px) {
            font-size: 15px;
            font-weight: 400;
        }
    `

    export const Img = styled.img `
    border-radius: 7px;
    @media screen and (max-width:600px) {
            width: 70%;
        }
    `

    export const DivColor = styled.div`
        width: 100%;
        height:3rem;
        width: 70%;
    `

    export const Division = styled.div`
        
        width: 20%;
        display: flex;
        flex-direction: column;
        width: 70%;
        @media screen and (max-width:600px) {
            width: 70%;
        }
    `