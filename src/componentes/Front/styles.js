import styled from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react";



export const Header = styled.h1 `
font-size: 3rem;
font-family: 'Montserrat', sans-serif;
color: white;
text-align: left;
@media screen and (max-width:600px) {
  font-size: 2rem;
  text-align: center;
}

`

export const Div = styled.div`
width: 50%;
display: flex;
align-items: center;

@media screen and (max-width:600px) {
 width: 100%;
 padding: 4% 7%;
}
`

export const Span = styled.span`
color: #006fff;
font-size: 4rem ;

@media screen and (max-width:600px) {
  font-size: 3rem;
}
`

export const Container = styled.div`
height: 90vh;
width: 100%;
display: flex;
padding: 0 7rem;
text-align: left;
background-color: #2d2d2d;

@media screen and (max-width:600px) {
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding:1rem 1rem;
}

`
export const ImgCube = styled.img`
width: 100%;

`

export const Slider = styled(Swiper)`
width: 50%;
`