import React from 'react';

import Video from './body/Video';
import Main from './body/Main';
import New from './body/New';

function Body(props) {
    return (
        <div>
            <Video></Video>

            <Main></Main>

            <New></New>
        </div>
    );
}

export default Body;