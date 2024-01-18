import React from 'react';

import Style from "../../sass/body/Draw.module.scss"

import Data from "../../data/data.json"

import {Button, TextField }from '@mui/material'

function Draw(props) {
    return (
        <div className={`${Style.container} mt-15 mb-5`}>
            <div className ="mt-5 mb-5 h1">Draw</div> 
            <div className='mt-5 justify-content-center d-flex align-items-center flex-row text-center gap-5'>
                <div className='col-6'>
                    <img src={Data.Draw[0].imgOrgSrc} alt="" style={{width:"20vw"}}/>
                    <div>
                        <p className='mt-5'>{Data.Draw[0].item}</p>
                        <p>{Data.Draw[0].price}</p>
                    </div>
                </div>
                <div className='col-6 d-flex flex-column justify-content-center gap-5 align-items-center' style={{width:"25rem"}}>
                    <div className='d-flex flex-row gap-5'>
                        <h5>Name.</h5>
                        <TextField id= "standard-basic" variant="standard"></TextField>
                    </div>
                    <div className='d-flex flex-row gap-5'>
                        <h5>Contact.</h5>
                        <TextField id= "standard-basic" variant="standard"></TextField>
                    </div>
                    <div className='d-flex flex-row gap-5'>
                        <h5>Email.</h5>
                        <TextField id= "standard-basic" variant="standard"></TextField>
                    </div>
                    
                    <Button variant='contained' style={{width:"10vw"}} className='mt-10'>submit</Button>
                    
                </div>
            </div>
        </div>
    );
}

export default Draw;