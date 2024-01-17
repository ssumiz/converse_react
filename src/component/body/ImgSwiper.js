import React from 'react';

import { Swiper, SwiperSlide} from 'swiper/react'
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules'

import Data from '../../data/data.json'

import styled from 'styled-components'
import Style from '../../sass/body/ImgSwiper.module.scss'

const SwiperImg = styled.img`

    width: 100%;
    height: auto;
    object-fit: contain;
    src: ${props => props.imgSrc || "none"}
`

function ImgSwiper(props) {
    return (
        <div className="mt-5 mb-5 justify-content-center d-flex align-items-center flex-row">
            <Swiper
                modules={ [Autoplay, EffectFade] }
                
                spaceBetween={50}
                slidesPerView = {1}
                onSlideChange={()=>{}}
                onSwiper={(swiper)=>{}}
                pagination={{
                    clickable:true,
                }}
                navigation={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                loop={true}
                className={`${Style.imgSwiper}`}
            >
                {
                    Data.ImgSwiper.map((val,idx) => {
                        
                        return(
                        <SwiperSlide>
                            <SwiperImg src={val.imgOrgSrc}></SwiperImg>
                        </SwiperSlide>
                        )
                        

                    } )
                }
            </Swiper>
        </div>
    );
}

export default ImgSwiper;