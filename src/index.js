import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css'

// Component
import Header from './component/Header'
import Body from './component/Body';
import Footer from './component/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <>
    <Header></Header>
    <Body></Body>
    <Footer></Footer>
  </>

);

