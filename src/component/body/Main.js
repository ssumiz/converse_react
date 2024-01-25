import React, { useEffect, useRef, useState } from 'react';

import Style from '../../sass/body/Main.module.scss'
import styled from 'styled-components';

import "../../sass/body/Main.scss";

import AOS from "aos"

import { Link } from 'react-router-dom'

const MainDiv = styled.div`

    width: ${props => props.width || "auto"};
    height: ${props => props.height || "auto"};
    background: ${props => props.bgColor || "white"};
    position : ${props => props.pos || "relative"};
    overflow: ${props => props.overflow || "hidden"};
    margin : 0;
`

function Main(props) {

    const refMainText = useRef();
    const refImageFirst = useRef();
    const refImageSecond = useRef();
    const refImageThird = useRef();

    useEffect(()=>{

        AOS.init();

        const timer = setInterval(()=>{ titleEvent()}, 2000);

        return ()=>{ clearInterval(timer);}
        
    },[])

    const titleEvent = (()=>{

        const classList = refMainText.current.classList;

        if(classList.contains(`${Style.sizeUp}`)){

            refMainText.current.classList.remove(`${Style.sizeUp}`);
            refImageFirst.current.classList.remove(`${Style.ctrlShadow}`);
            refImageSecond.current.classList.remove(`${Style.ctrlShadow}`);
            refImageThird.current.classList.remove(`${Style.ctrlShadow}`);
        }
        else{

            refMainText.current.classList.add(`${Style.sizeUp}`);
            refImageFirst.current.classList.add(`${Style.ctrlShadow}`);
            refImageSecond.current.classList.add(`${Style.ctrlShadow}`);
            refImageThird.current.classList.add(`${Style.ctrlShadow}`);
        }

    })

    return (
        <>
            <div className={Style.container}>
                
                <MainDiv width="30vw" className={Style.imgPosFirst} ref={refImageFirst}><img src="img/img5.png" alt="img1" className={Style.imgSrc} data-aos="img_1" data-aos-duration="1500" data-aos-easing="linear"/></MainDiv>
                <MainDiv width="40vw" className={Style.imgPosSeconds} ref={refImageSecond}><img src="img/img2.jpg" alt="img1" className={Style.imgSrc} data-aos="fade-left" data-aos-duration="1500" data-aos-offset="200" data-aos-easing="linear"/></MainDiv>
                <MainDiv width="40vw" className={Style.imgPosThird} ref={refImageThird}><img src="img/img3.jpg" alt="img1" className={Style.imgSrc} data-aos="img_3" data-aos-duration="1500" data-aos-easing="linear"/></MainDiv>
                <Link to="/collabo" style={{color:"black"}}>
                    <MainDiv
                    width="50vw" className={Style.textPos} pos="absolute" ref={refMainText}>
                        <strong>Converse<br /> X<br /> Stussy</strong>
                        </MainDiv>
                </Link>
               
            </div>
        </>
    );
}

export default Main;