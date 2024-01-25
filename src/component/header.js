import React from 'react';

import Event from './heder/Event';

import Style from "../sass/header/header.module.scss"

import { useRef, useState, useEffect } from 'react';

import { Link } from "react-router-dom"



function Header(props) {

    const [statWheelPos, setStatWheelPos] = useState(false);

    const refHeader = useRef();
    const refLogoImg = useRef();

    const updateWheelPos = () => {
        

        if(window.scrollY > refHeader.current.scrollTop){

            refHeader.current.classList.add(`${Style.fixed}`);

            setStatWheelPos(true);

        }
        else if(window.scrollY === 0 ){

            refHeader.current.classList.remove(`${Style.fixed}`);

            setStatWheelPos(false);

        }

       
    };

    useEffect(()=>{

        window.addEventListener("scroll", updateWheelPos);

        return () => window.removeEventListener("scroll", updateWheelPos);
        
    }, [])

    return (
        <div className='border-bottom'>
            <Event></Event>

            <div ref={refHeader} className="d-flex justify-content-center align-items-center mt-5 mb-5">
                <Link to="/">
                {statWheelPos ? (<img src= {"img/logo1_invert.png"} alt="로고" />):(<img src= {"img/logo1.png"} alt="로고" />)}
                </Link>
            </div>
        </div>
    );
}

export default Header;