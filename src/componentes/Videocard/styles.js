import styled from "styled-components";

  export const Div = styled.a`
        width: 20%;
        text-decoration: none;
        color: black;
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem;
        border-radius: 7px;
        box-shadow:0 18px 36px rgba(0, 0, 0, 0.30), 0 14px 11px rgba(0, 0, 0, 0.22) ;
        @media screen and (max-width:600px) {
            width: 70%;
        }
    `

   export const Titulo = styled.h5`
        font-weight: bold;
        font-size: .8rem;
        color: black;
        

        @media screen and (max-width:600px) {
            font-size: 15px;
            font-weight: 400;
        }
    `

    export const Img = styled.img `
    border-radius: 7px;
    width: 100%;
    @media screen and (max-width:600px) {
            width: 70%;
        }
    `

    export const Division = styled.div`
        margin: 1rem;
    `


   