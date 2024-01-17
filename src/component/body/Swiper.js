import React from 'react';

// Import Swiper React components
import { Swipe, SwiperSlide } from 'swiper/react';


import Style from "../../sass/body/Swiper.module.scss"



function Swiper(props) {
    return (
        <div>
            
            <Swiper
             spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
             onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
      
    </Swiper>

        </div>
    );
}

export default Swiper;