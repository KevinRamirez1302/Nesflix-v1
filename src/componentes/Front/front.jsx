
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import {  Pagination, EffectFade, Navigation, Autoplay } from "swiper"
import { Header, Div, Container, Slider, Span, ImgCube } from "./styles"; 
import FrontTwo from "../front2/front2";
import Footer from "../Footer/footer";
import React from './imgslider/reactjs-icon.svg'
import HTML from './imgslider/html-5-logo-svgrepo-com.svg' 
import CSS from './imgslider/css-3-logo-svgrepo-com.svg'
import GIT from './imgslider/git-svgrepo-com.svg'
import Boots from './imgslider/bootstrap-4-logo-svgrepo-com.svg'
import JS from './imgslider/logo-javascript.svg'


export const Front = (props) => {
   
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

        <FrontTwo />
        <Footer />

    </>
    
}




