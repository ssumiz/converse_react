import React, { useEffect, useState, useRef } from 'react';

import Style from '../../sass/body/Collabo.module.scss'
import styled from 'styled-components';

import Data from "../../data/data.json"

import { TextField, Autocomplete, Button } from '@mui/material';

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

    const [ sizeOption , setSizeOption ]  = useState([]);

    const refTop = useRef();
    const refItemData = useRef();

    let selectedSize = "";

    const copySizeOption = (selectedIdx) =>{

        let copy = [ ...Data.Collabo[selectedIdx].itemSize ];

        setSizeOption(copy);

    }

    useEffect(()=>{

        copySizeOption(selectedIdx);
        

    },[selectedIdx])

    useEffect(()=>{

        window.addEventListener("scroll", updateWheelPos);

        return () => window.removeEventListener("scroll", updateWheelPos);

    },[])

    const updateWheelPos = ()=>{

        if(window.scrollY > refTop.current.scrollTop){

            refItemData.current.classList.add(`${Style.marginTopCtrl}`);
    
        }
        else if(window.scrollY === 0 ){
    
            refItemData.current.classList.remove(`${Style.marginTopCtrl}`);
    
        }

    }
    

    const clickColor = (idx) =>{

        setSelectedIdx(idx);

    }

    return (
        <div className={`${Style.container} mb-5 mt-5 position-relative`} ref={refTop}>
            <div className={`mb-5 row d-flex `} style={{width:"80%"}}>
                <div className='col-8 position-relative row'>
                    <ImgDiv className="col-12" bgImg={`${Data.Collabo[selectedIdx].mainImgSrc}`}></ImgDiv>

                    <div className="row mt-5 justify-content-center d-flex align-items-center">
                        {
                            Data.Collabo[selectedIdx].subImgSrc.map((val , idx) =>{
                            
                                return(
                                    <img src={val} alt="" key={`subImg_${idx}`} className="col-5" style={{marginRight:"5px", marginTop:"12px", marginBottom:"12px"}}/>
                                )

                            })
                        }
                    </div>
                    
                </div>
                <div className={`col-4 gap-5 mt-5 ${Style.ItemData}`} ref={refItemData}>


                    <strong><p>{Data.Collabo[selectedIdx].itemName}</p></strong>

                    <p>{Data.Collabo[selectedIdx].itemPrice}</p>

                    <hr/>

                    <p>{Data.Collabo[selectedIdx].itemDesc}</p>

                    <hr/>

                    <p><strong>Color : </strong>{Data.Collabo[selectedIdx].itemColor}</p>

                    {
                        Data.Collabo.map((val , idx) =>{

                            return(
                                <img src={val.thumbNailSrc} alt="" key={`img_${idx}`} style={{marginRight:"10px", cursor:"pointer"}} onClick={()=>{ clickColor(val.itemIndex)}}/>
                            )
                        })
                    }
                    
                    <hr/>

                    {
                            

                    }
                    <div style={{ width:"100%" }}>
                        <Autocomplete
                            // value={selectedSize}
                            onChange={(event, val)=>{
                                
                                selectedSize = val;
                                console.log(selectedSize);

                            }}
                        
                            id="test"
                            disablePortal
                            options={sizeOption}
                            sx={{ width: "100%"}}
                            renderInput={(params)=> <TextField {...params} label="Size" />}
                            
                        />
                    </div>

                    <hr/>

                    <Button variant='contained' className={`${Style.addCartBtn}`}>Add Cart</Button>
                    

                    

                    
                </div>
            </div>
        </div>
    );
}

export default Collabo;