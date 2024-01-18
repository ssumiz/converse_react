import React, { useState } from 'react';

import Style from '../../sass/body/New.module.scss'
import styled from 'styled-components';

//import { CircleFill } from 'react-bootstrap-icons';

// data
import Data from "../../data/data.json"


const ItemDiv = styled.div`
    
    background-size: 100%;
    overflow: ${props => props.overflow || "hidden"};
    margin : 0;
    margin-bottom : 2rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 16px;
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

    const changeState =(index, state)=>{

        let copy = [ ...isMouseOver];

        copy[index] = state;

        setIsMouseOver(copy);

    }



   

    return (
        <div className={`${Style.container} mb-5`}>
            <div className ="mt-5 mb-5 h1">New</div>
            
            <div className ="row" style={{width:"80%"}}>
                
                {
                    Data.New.map((val, idx)=>{


                        return(

                            <ItemDiv className="item col-12 col-sm-6 col-md-4 position-relative" key={`NewItemKey${idx}`}>
                                <img src={isMouseOver[idx] ? Data.New[idx].imgHoverSrc : Data.New[idx].imgOrgSrc} alt="" className={`${Style.imgSrc} ${isMouseOver[idx] ? Style.hover: ''} `} onMouseOver={()=>changeState(idx, true)} onMouseLeave={()=>changeState(idx,false)}/>
                                <p className={`${Style.itemDesc}`} style={{ color : isMouseOver[idx]? Data.New[idx].color : "#000"}}>{Data.New[idx].itemName}</p>
                                <p className={`${Style.itemDesc} mb-0`} style={{ color : isMouseOver[idx]? Data.New[idx].color : "#000"}}>{Data.New[idx].itemPrice}</p>
                             </ItemDiv>

                        )
                    })
                }
                

            </div>



        </div>
    );
}

export default New;