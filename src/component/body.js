import React from 'react';

import Video from './body/Video';
import Main from './body/Main';
import New from './body/New';
import ImgSwiper from './body/ImgSwiper';

function Body(props) {
    return (
        <div>
            <Video></Video>

            <Main></Main>

            <New></New>

            <ImgSwiper></ImgSwiper>
        </div>
    );
}

export default Body;