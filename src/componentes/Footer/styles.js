import styled from "styled-components";


export const SectionFoo = styled.section `
    display: flex;
    height: 50vh;
    align-items: center;
    background-color: #408d86;
    text-align: center;
    color: white;
    padding: 7% 15%;
    @media screen and (max-width:450px) {
        height: 60vh;
        flex-direction: column;
}


    `

export const Titulo = styled.h1`
    margin-bottom: 1rem;
    color: white;
    font-size: 1.5rem;
    @media screen and (max-width:450px) {
  font-size: 1rem;
}
    
`

export const Parrafo = styled.h1`
    color: white;
    font-size: .9rem;

    @media screen and (max-width:450px) {
  font-size: .8rem;
}
`

export const Div = styled.div`
margin: 1rem;
width: 50%;
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
@media screen and (max-width:450px) {
    width: 80% ;
    margin:.5rem;
}

`
export const DivBrand = styled.div`
margin: 2rem;
width: 50%;
display: flex;
justify-content:space-around;

@media screen and (max-width:450px) {
  width: 40%;
  margin: 1rem;
}
`