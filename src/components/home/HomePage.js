
// 02/17/2021 10:36 am - SSN - [20210217-1036] - [001] - M05-02 Create home page

import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (

    <div className="jumbotron">
        <h1>Plurasight Administration</h1>
        <p>React, Redux and React Router for ultra-responsive web apps.</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
    </div>

);

export default HomePage;
