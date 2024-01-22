import React, { useEffect } from 'react';

import Style from '../../sass/body/StoreInfo.module.scss'

import SearchIcon from '@mui/icons-material/Search'
import { InputBase } from '@mui/material';

const { kakao } = window;

function StoreInfo(props) {

    useEffect(()=>{
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(37.5629677, 126.9845302),
            level:8
        };
        var map = new kakao.maps.Map(container, options);
    }, [])

    return (
        <div className={`${Style.container} mt-5 mb-5`}>
            <div className ="mt-5 mb-5 h1">Store Info</div>

            <div className='mt-5 justify-content-center d-flex align-items-center flex-row text-center gap-5'>
                <div className="col-6">
                    <div>
                        <SearchIcon/>
                        <InputBase
                        className='ms-4'
                        placeholder=' 주소 또는 매장명 입력'
                        inputProps={{'aria-label' : 'search'}}
                        style={{backgroundColor:"grey" }}
                        ></InputBase>
                    </div>
                </div>
                <div id="map" className="col-6" style={{width:"50vw" , height:"75vh"}}>
                    
                </div>
            </div>
        </div>
    );
}

export default StoreInfo;