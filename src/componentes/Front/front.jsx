import styled from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { motion } from "framer-motion";
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
        text-align: left;
        @media screen and (max-width:600px) {
          font-size: 2rem;
          text-align: center;
        }
       
    `

    const Div = styled.div`
      width: 50%;
      display: flex;
      align-items: center;

      @media screen and (max-width:600px) {
         width: 100%;
         padding: 4% 7%;
        }
    `

    const Span = styled.span`
        color: #006fff;
        font-size: 4rem ;

        @media screen and (max-width:600px) {
          font-size: 3rem;
        }
    `

    const Container = styled.div`
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
    const ImgCube = styled.img`
        width: 100%;
        
    `

    const Slider = styled(Swiper)`
      width: 50%;
    `

    return <>
        <Container>
        <Div>
        <motion.div
        initial={{x:0}}
          animate={{ y: -20 }}
          transition={{ type: "spring", stiffness: 100 }}
        ><Header><Span>Disfruta</Span> <br /> de tus videos de tecnologia<Span>Favoritos</Span></Header></motion.div>
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




