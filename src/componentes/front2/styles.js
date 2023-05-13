import styled from "styled-components";

 export const Sections = styled.section `
    display: flex;
    height: 100vh;
    width: 100%;
    background: #2d2d2d; /* fallback for old browsers */
    background: -webkit-linear-gradient(to bottom, #2d2d2d, #006fff); /* Chrome 10-25, Safari 5.1-6 */
     background: linear-gradient(to bottom, #2d2d2d, #006fff);
    @media screen and (max-width:600px){
        flex-direction: column;
    }
    
`

export const Div = styled.div`
    width: 50%;
    text-align: center;
    box-sizing: border-box;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2% 7%;

    @media screen and (max-width:600px){
        width: 100%;
    }

`


export const Imagen = styled.img`
    width: 100%;
    height: 70%;
`

export const Titulo = styled.h2`
    font-weight: bold;
    margin-bottom: 1rem;
    color: white;
`

export const Parrafo = styled.p`
    font-size: 20px;
    color: white;
`