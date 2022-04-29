
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {

    const activeStyle = { color: '#F15B2A' };

    return (
        <nav>
            <p>({activeStyle.color}) ({process.env.API_URL})  ({process.env.REACT_APP_API_URL})</p>
            <NavLink to="/" activeStyle={activeStyle} exact>Home</NavLink>{" | "}
            <NavLink to="/courses" activeStyle={activeStyle} exact>Courses</NavLink>{" | "}
            <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
        </nav>

    )

}

export default Header;