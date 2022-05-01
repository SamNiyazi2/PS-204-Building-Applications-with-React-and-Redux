
import React from 'react';
import { NavLink } from 'react-router-dom';

import AppLink from './app_link.jsx';


const Header = () => {

    const activeStyle = { color: '#F15B2A' };

    return (
        <nav>
            <NavLink to="/" activeStyle={activeStyle} exact>Home</NavLink>{" | "}
            <NavLink to="/courses" activeStyle={activeStyle} exact>Courses</NavLink>{" | "}
            <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
            &nbsp; | &nbsp;
            <AppLink href="/" activeStyle={activeStyle} >Home</AppLink>{" | "}
            <AppLink href="/courses" activeStyle={activeStyle} >Courses</AppLink>{" | "}
            <AppLink href="/about" activeStyle={activeStyle}>About</AppLink>

        </nav>

    )

}

export default Header;