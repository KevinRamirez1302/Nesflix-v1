import styled from "styled-components";

 export const Sections = styled.section `
    display: flex;
    height: 100vh;
    width: 100%;
    background: -webkit-linear-gradient(to bottom, #E0F2F1, #ffffff); /* Chrome 10-25, Safari 5.1-6 */
     background: linear-gradient(to bottom, #E0F2F1, #ffffff);
    
    @media screen and (max-width:600px){
        flex-direction: column;
        height: 65vh;
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
    height: 80%;
`

export const Titulo = styled.h2`
    font-weight: bold;
    margin-bottom: 1.2rem;
    color: #728f9e;

    @media screen and (max-width:450px) {
  font-size: 1rem;
}
`

export const Parrafo = styled.p`
    font-size: 20px;
    color: #728f9e;
    @media screen and (max-width:450px) {
  font-size: 1rem;
}
`