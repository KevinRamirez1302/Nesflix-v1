import styled from "styled-components";
import { Swiper } from "swiper/react";

export const Header = styled.h1`
  font-size: 3rem;
  font-family: "Montserrat", sans-serif;
  color: #263339;
  text-align: left;

  @media screen and (max-width: 1000px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 800px) {
    font-size: 2rem;
    text-align: center;
  }

  @media screen and (max-width: 450px) {
    font-size: 1.5rem;
    padding: 0.2rem;
  }
`;

export const Div = styled.div`
  width: 50%;
  display: flex;
  align-items: center;

  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 4% 7%;
  }
`;

export const Span = styled.span`
  color: #408d86;
  font-size: 4rem;

  @media screen and (max-width: 1000px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 800px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 450px) {
    font-size: 2rem;
    padding: 0.2rem;
  }
`;

export const Container = styled.div`
  height: 90vh;
  width: 100%;
  display: flex;
  padding: 0 7rem;
  text-align: left;
  background-color: #e0f2f1;
  


  @media screen and (max-width: 1000px) {
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 1rem 1rem;
  }

  @media screen and (max-width: 450px) {
    height: 80vh;
  }
`;
export const ImgCube = styled.img`
  width: 100%;
`;

export const Slider = styled(Swiper)`
  width: 50%;
`;
