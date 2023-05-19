import styled from "styled-components";

 export const Sections = styled.section `
    display: flex;
    height: 100vh;
    width: 100%;
    background: -webkit-linear-gradient(to bottom, #E0F2F1, #ffffff); /* Chrome 10-25, Safari 5.1-6 */
     background: linear-gradient(to bottom, #E0F2F1, #ffffff);
    
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
    width: 90%;
    height: 60%;
`

export const Titulo = styled.h2`
    font-weight: bold;
    margin-bottom: 1rem;
    color: #728f9e;
`

export const Parrafo = styled.p`
    font-size: 20px;
    color: #728f9e;
`