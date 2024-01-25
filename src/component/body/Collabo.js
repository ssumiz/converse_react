import React, { useEffect, useState } from 'react';

import Style from '../../sass/body/Collabo.module.scss'
import styled from 'styled-components';

import Data from "../../data/data.json"

const ImgDiv = styled.div`

    background-repeat:no-repeat;
    background-image: url(${props => props.bgImg});
    
    width:100%;
    height:70vh;
    margin 0 auto;
    
    background-position: center center;
    background-size: contain;
    
`



function Collabo(props) {

    const [ selectedIdx , setSelectedIdx ] = useState(0);

    useEffect(()=>{




    },[selectedIdx])

    const clickColor = (idx) =>{

        setSelectedIdx(idx);

    }

    return (
        <div className={`${Style.container} mb-5 mt-5`}>
            <div className={`mb-5 row`} style={{width:"80%"}}>
                <div className='col-8 position-relative'>
                    <ImgDiv className="col-12" bgImg={`${Data.Collabo[selectedIdx].mainImgSrc}`}></ImgDiv>


                </div>
                <div className="col-4 gap-5 mt-5">


                    <strong><p>{Data.Collabo[selectedIdx].itemName}</p></strong>

                    <p>{Data.Collabo[selectedIdx].itemPrice}</p>

                    <hr/>

                    <p>{Data.Collabo[selectedIdx].itemDesc}</p>

                    <hr/>

                    <p><strong>Color : </strong>{Data.Collabo[selectedIdx].itemColor}</p>

                    {
                        Data.Collabo.map((val , idx) =>{

                            return(
                                <img src={val.thumbNailSrc} alt="" style={{marginRight:"10px", cursor:"pointer"}} onClick={()=>{ clickColor(val.itemIndex)}}/>
                            )
                        })
                    }
                    
                    
                </div>
            </div>
        </div>
    );
}

export default Collabo;