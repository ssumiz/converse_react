import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css'

//Router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//fontSource
import "@fontsource/ubuntu/700.css"


// Component
import Header from './component/Header'
import Body from './component/Body';
import Footer from './component/Footer';
import Collabo from './component/body/Collabo';

// Import Swiper styles
import 'swiper/css';

//AOS
import AOS from "aos"
import "aos/dist/aos.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

 

  <>

    <BrowserRouter>
      <Header></Header>
      
      <Routes>
        <Route path="/" element={ <Body/> }></Route>
        <Route path="/collabo" element={ <Collabo/> }></Route>
        
        <Route path="*" element={ <Body/> }></Route>
      </Routes>
      
      <Footer></Footer>
    
    </BrowserRouter>
    
  </>

);

