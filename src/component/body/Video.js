import React from 'react';

import Iframe from 'react-iframe';

function Video(props) {
    return (
        <div style={{ backgroundColor: "black" }}>
            <Iframe
                src="https://player.vimeo.com/video/717690017?autoplay=1&loop=1&muted=1"
                width="100%"
                height="1280px"
                display='block'
                position='relative'
                allow='autoplay; fullscreen'
            // className='mt-5'
            ></Iframe>
        </div>
    );
}

export default Video;