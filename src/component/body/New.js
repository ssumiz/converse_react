import React from 'react';

import Style from '../../sass/body/New.module.scss'
import styled from 'styled-components';

const titleSpan = styled.span`

    font-size = "50px";
`

function New(props) {
    return (
        <div className={Style.container}>
            <titleSpan>New</titleSpan>
        </div>
    );
}

export default New;