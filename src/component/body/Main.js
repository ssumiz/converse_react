import React, { useEffect, useRef, useState } from 'react';

import Style from '../../sass/body/Main.module.scss'
import styled from 'styled-components';

import "../../sass/body/Main.scss";

import AOS from "aos"

const MainDiv = styled.div`

    width: ${props => props.width || "auto"};
    height: ${props => props.height || "auto"};
    background: ${props => props.bgColor || "white"};
    position : ${props => props.pos || "relative"};
    overflow: ${props => props.overflow || "hidden"};
    margin : 0;
`


function Main(props) {

    const refImgThird = useRef();

    const [statThird, setStatThird] = useState(true);

   

    const fnThirdTimer = ((bool)=>{
        setStatThird(!bool);

        if( bool ){
            // refImgThird.current.classList.add();
        }
        else{
            // refImgThird.current.classList.remove();
        }
    });

    useEffect(()=>{
        AOS.init();

        setTimeout(()=>{
            fnThirdTimer(statThird);
        }, 1000)

        

        return ()=>{
            clearTimeout(()=>{

            })

            
        }
    })

    const [test, setTest] = useState(0);

    useEffect(()=>{

        console.log(`test Render ${test}`);
        // setTest(test+1);
        // setTest(test+1);
        return ()=>{
            console.log(`test Return ${test}`);
        }

    }, [test])

    return (
        <>
            <div className={Style.container}>
                {/* <button onClick = { setTest(2)}>123</button> */}
                <MainDiv width="30vw" className={Style.imgPosFirst}><img src="img/img5.png" alt="img1" className={Style.imgSrc} data-aos="img_1" data-aos-duration="1500" data-aos-easing="linear"/></MainDiv>
                <MainDiv width="40vw" className={Style.imgPosSeconds}><img src="img/img2.jpg" alt="img1" className={Style.imgSrc} data-aos="fade-left" data-aos-duration="1500" data-aos-offset="500" data-aos-easing="linear"/></MainDiv>
                <MainDiv width="40vw" className={Style.imgPosThird}><img src="img/img3.jpg" alt="img1" className={Style.imgSrc} data-aos="img_3" data-aos-duration="1500" data-aos-easing="linear"/></MainDiv>
                <MainDiv width="50vw" className={Style.textPos} pos="absolute" ref={refImgThird}><strong>Converse<br /> X<br /> Stussy</strong></MainDiv>
            </div>
        </>
    );
}

export default Main;