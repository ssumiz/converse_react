import React from 'react';

import Style from '../../sass/body/Main.module.scss'
import styled from 'styled-components';



const MainDiv = styled.div`

    width: ${props => props.width || "auto"};
    height: ${props => props.height || "auto"};
    background: ${props => props.bgColor || "white"};
    position : relative;
    overflow: ${props => props.overflow || "hidden"};
    margin : 0;
`


function Main(props) {
    return (
        <>
            <div className={Style.container}>
                <MainDiv width="30vw" className={Style.imgPosFirst}><img src="img/img4.png" alt="img1" className={Style.imgSrc} /></MainDiv>
                <MainDiv width="40vw" className={Style.imgPosSeconds}><img src="img/img2.jpg" alt="img1" className={Style.imgSrc} /></MainDiv>
                <MainDiv width="40vw" className={Style.imgPosThird}><img src="img/img3.jpg" alt="img1" className={Style.imgSrc} /></MainDiv>
                <MainDiv width="50vw" className={Style.textPos}>Converse<br /> X<br /> Stussy</MainDiv>
            </div>
        </>
    );
}

export default Main;