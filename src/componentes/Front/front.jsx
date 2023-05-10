import styled from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import {  Pagination, EffectFade, Navigation, Autoplay } from "swiper"
import React from './imgslider/reactjs-icon.svg'
import HTML from './imgslider/html-5-logo-svgrepo-com.svg' 
import CSS from './imgslider/css-3-logo-svgrepo-com.svg'
import GIT from './imgslider/git-svgrepo-com.svg'
import Boots from './imgslider/bootstrap-4-logo-svgrepo-com.svg'
import JS from './imgslider/logo-javascript.svg'


export const Front = (props) => {
   
    const Header = styled.h1 `
        font-size: 3rem;
        font-family: 'Montserrat', sans-serif;
        color: white;
       
    `

    const Div = styled.div`
      width: 50%;
      display: flex;
      align-items: center;
    `

    const Span = styled.span`
        color: #006fff;
        font-size: 4rem ;
    `

    const Container = styled.div`
        height: 84.1vh;
        width: 100%;
        display: flex;
        padding: 0 2.5rem;
        text-align: left;
        background-color: #2d2d2d;
       
        
    `
    const ImgCube = styled.img`
        width: 80%;
        height: 80%;
    `

    const Slider = styled(Swiper)`
      width: 50%;
    `

    return <>
        <Container>
        <Div>
        <Header><Span>Disfruta</Span> de tus videos favoritos sobre <Span>tecnologia</Span></Header>
        </Div>
        
          <Div>
          <Slider
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            
            modules={[Autoplay, Pagination, Navigation]}
            
        
      >
        <SwiperSlide>
          <ImgCube src={React} />
        </SwiperSlide>
        <SwiperSlide>
          <ImgCube src={HTML} />
        </SwiperSlide>
        <SwiperSlide>
          <ImgCube src={CSS} />
        </SwiperSlide>
        <SwiperSlide>
          <ImgCube src={Boots} />
        </SwiperSlide>
        <SwiperSlide>
          <ImgCube src={JS} />
        </SwiperSlide>
        <SwiperSlide>
          <ImgCube src={GIT} />
        </SwiperSlide>
      </Slider>
           
          </Div>
            
           
            
        </Container>

    </>
    
}




