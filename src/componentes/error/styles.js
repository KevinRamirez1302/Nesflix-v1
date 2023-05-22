import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    justify-content: space-around;
    height: 100vh;
    align-items: center;

    @media screen and ( max-width: 450px){
        flex-direction: column;
        justify-content: center;
        height: 90vh;
    }
    
`

export const Img = styled.img`
    width: 35rem;

    @media screen and ( max-width: 450px){
        width: 20rem;
    }
`

export const Titulo = styled.h1`
    font-size: 5rem;
    color: #408d86;
    padding-bottom: 3rem;

    @media screen and ( max-width: 450px){
        font-size: 3rem;
        padding-bottom: 1.5rem;
    }
`

export const H2 = styled.h1`
    font-size: 2rem;
`