import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css'

//fontSource
import "@fontsource/ubuntu/700.css"


// Component
import Header from './component/Header'
import Body from './component/Body';
import Footer from './component/Footer';

// Import Swiper styles
import 'swiper/css';

//AOS
import AOS from "aos"
import "aos/dist/aos.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

 

  <>
    <Header></Header>
    <Body></Body>
    <Footer></Footer>
  </>

);

