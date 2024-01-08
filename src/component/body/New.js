import React, { useState } from 'react';

import Style from '../../sass/body/New.module.scss'
import styled from 'styled-components';


const ItemDiv = styled.div`
    
    background-size: 100%;
    overflow: ${props => props.overflow || "hidden"};
    margin : 0;
    margin-bottom : 2rem;

`

function New(props) {

    const [isMouseOver, setIsMouseOver] = useState([
        false,
        false,
        false,
        false,
        false,
        false
    ]);

    const imgOrg = [
        "img/new1_1.png",
        "img/new2_1.jpg",
        "img/new3_1.jpg",
        "img/new4_1.png",
        "img/new5_1.jpg",
        "img/new6_1.jpg",
    ];

    const imgHover = [
        "img/new1_2.png",
        "img/new2_2.jpg",
        "img/new3_2.jpg",
        "img/new4_2.png",
        "img/new5_2.jpg",
        "img/new6_2.jpg",
    ];

    const changeState =(index, state)=>{

        let copy = [ ...isMouseOver];

        copy[index] = state;

        setIsMouseOver(copy);

    }

   

    return (
        <div className={Style.container}>
            <div className ="mb-5 h1">New</div>
            
            <div className ="row w-75">
                
                <ItemDiv className="item col-4 position-relative">
                    <p className={`${Style.itemDesc}`}>Chuck70 Vintage Canverse Green</p>
                    <img src={isMouseOver[0] ? imgHover[0] : imgOrg[0]} alt="" className={`${Style.imgSrc} ${isMouseOver[0] ? Style.hover: ''} `} onMouseOver={()=>changeState(0, true)} onMouseLeave={()=>changeState(0,false)}/>
                </ItemDiv>
                <ItemDiv className="item col-4"><img src={isMouseOver[1] ? imgHover[1] : imgOrg[1]} alt="" className={`${Style.imgSrc} ${isMouseOver[1] ? Style.hover: ''} `} onMouseOver={()=>changeState(1, true)} onMouseLeave={()=>changeState(1,false)}/></ItemDiv>
                <ItemDiv className="item col-4"><img src={isMouseOver[2] ? imgHover[2] : imgOrg[2]} alt="" className={`${Style.imgSrc} ${isMouseOver[2] ? Style.hover: ''} `} onMouseOver={()=>changeState(2, true)} onMouseLeave={()=>changeState(2,false)}/></ItemDiv>
                <ItemDiv className="item col-4"><img src={isMouseOver[3] ? imgHover[3] : imgOrg[3]} alt="" className={`${Style.imgSrc} ${isMouseOver[3] ? Style.hover: ''} `} onMouseOver={()=>changeState(3, true)} onMouseLeave={()=>changeState(3,false)}/></ItemDiv>
                <ItemDiv className="item col-4"><img src={isMouseOver[4] ? imgHover[4] : imgOrg[4]} alt="" className={`${Style.imgSrc} ${isMouseOver[4] ? Style.hover: ''} `} onMouseOver={()=>changeState(4, true)} onMouseLeave={()=>changeState(4,false)}/></ItemDiv>
                <ItemDiv className="item col-4"><img src={isMouseOver[5] ? imgHover[5] : imgOrg[5]} alt="" className={`${Style.imgSrc} ${isMouseOver[5] ? Style.hover: ''} `} onMouseOver={()=>changeState(5, true)} onMouseLeave={()=>changeState(5,false)}/></ItemDiv>
            </div>



        </div>
    );
}

export default New;