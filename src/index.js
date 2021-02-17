
// 02/17/2021 08:17 am - SSN - [20210217-0817] - [001] - M03-08 - Create initial app structure


import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";


import App from './components/App';


render(

    <Router>
        <App />
    </Router>

    , document.getElementById( 'app' ) );