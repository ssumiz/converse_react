import React, { useState, useEffect, useRef } from 'react';

import Style from '../../sass/body/StoreInfo.module.scss'

import SearchIcon from '@mui/icons-material/Search'
import { InputBase, List, ListItem, ListItemButton,  ListItemText, Tabs } from '@mui/material';

import Data from "../../data/data.json"

const { kakao } = window;

function StoreInfo(props) {

    const [selectedIndex, setSelectedIndex] = useState(0);

    const [mapLevel, setMapLevel] = useState(8);

    const [searchText, setSearchText] = useState("");

    const refSearchTag = useRef();

    const listItemClick= (idx) =>{
        setSelectedIndex(idx);

        setMapLevel(3);
    };

    const activeEnter = (e) =>{
        if(e.key === "Enter"){
            onClickSearchIcon(refSearchTag.current.value);
        }
    }

    useEffect(()=>{
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(37.5629677, 126.9845302),
            level:8
        };
        var map = new kakao.maps.Map(container, options);

        
        var markPos = []; 

        var markerImageSrc = "https://ssl.pstatic.net/static/maps/mantle/1x/marker-default.png"; 

       for( var i = 0; i< Data.Store_info.length; i++)
       {
            var data = {
                title : Data.Store_info[i].store_title,
                latlng : new kakao.maps.LatLng(Data.Store_info[i].store_LatLng[0], Data.Store_info[i].store_LatLng[1]),
                content : `<div style="width:150px;text-size:100px;text-align:center;padding:6px 0;"><strong>${Data.Store_info[i].store_title}</strong></div>`
            }

            markPos.push(data);
       }


       // Map Level 변경
       map.setLevel(mapLevel);

       // Map 이동
       map.panTo(markPos[selectedIndex].latlng);
       
    
       

       for( var j = 0; j< markPos.length; j++)
       {

            // 마커 이미지의 이미지 크기 입니다
            var imageSize = new kakao.maps.Size(24, 35); 

            // 마커 이미지를 생성합니다    
            var markerImage = new kakao.maps.MarkerImage(markerImageSrc, imageSize); 
        
            // 마커를 생성합니다
            var marker = new kakao.maps.Marker({
                map: map, // 마커를 표시할 지도
                position: markPos[j].latlng , // 마커를 표시할 위치
                // title : markPos[j].content, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                image : markerImage, // 마커 이미지 
                clickable: true
            });

            // 인포윈도우를 생성합니다
            var infowindow = new kakao.maps.InfoWindow({
                position : markPos[j].latlng, 
                //content : iwContent 
                content: markPos[j].content
            });

            kakao.maps.event.addListener(marker, 'click', markerClickListener(map, marker, infowindow) );
            kakao.maps.event.addListener(marker, 'mouseout', markerOutListener(infowindow) );
       }

       function markerClickListener(map,marker,infowindow){
            return function(){
                infowindow.open(map, marker);
            };
       }

       function markerOutListener(infowindow){
            return function(){
                infowindow.close();
            }
       }

       

    }, [selectedIndex, mapLevel])

    function onClickSearchIcon( searchText ){

        setSearchText(searchText);

    }

    return (
        <div className={`${Style.container} mt-15 mb-15`}>
            <div className ="mt-5 mb-5 h1">Store Info</div>

            <div className='mt-5 justify-content-center d-flex align-items-center flex-row text-center gap-5'>
                <div className="col-6">
                    <div>
                        <InputBase
                        className='ms-4'
                        placeholder=' 주소 또는 매장명 입력'
                        inputProps={{'aria-label' : 'search'}}
                        style={{backgroundColor:"white" , borderBottom : "1px solid black" , width: "20vw"}}
                        inputRef={refSearchTag}
                        onKeyDown={(e)=>{activeEnter(e)}}
                        >
                        </InputBase>
                        <SearchIcon className="ms-2" onClick={ ()=>{onClickSearchIcon(refSearchTag.current.value)}} style={{cursor:"pointer"}}/>
                    </div>
                    <div className='mt-5 justify-content-center d-flex align-items-center' >
                        <Tabs
                            orientation='vertical'
                            variant='scrollable'
                            aria-label="wrapped label"
                            style={{height:"600px", width: "35vw"}}
                            // centered
                        >

                            {
                                Data.Store_info.map((val,idx)=>{

                                    if( searchText === "" || (val.store_title.indexOf(searchText) !== -1) 
                                    || (val.store_addreess.indexOf(searchText) !== -1))
                                    {
                                        return(
                                        
                                            <ListItemButton
                                                selected={selectedIndex === val.itemIndex}
                                                onClick={()=> listItemClick(val.itemIndex)}
                                                style={{ borderTop : "1px solid black" }}
                                            >
                                                <ListItemText
                                                    style={{textSize: "20px"}}
                                                >
                                                    <h5 className="mb-3"><strong>컨버스 {val.store_title}</strong></h5>
                                                    <p>{val.store_addreess}</p>
                                                    <p>{val.store_contact}</p>
                                                </ListItemText>
                                              
                                            </ListItemButton>
                                        )
                                    }
                                    

                                })


                            }
                            
                        </Tabs>
                    </div>
                </div>
                <div id="map" className="col-6" style={{width:"40vw" , height:"75vh"}}>
                    
                </div>
            </div>
        </div>
    );
}

export default StoreInfo;