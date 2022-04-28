
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {

    const activestyle_v02 = { color: '#F15B2A' };

    return (
        <nav>
            <NavLink to="/" activestyle_v02={activestyle_v02} exact="true">Home</NavLink>{" | "}
            <NavLink to="/courses" activestyle_v02={activestyle_v02} exact="true">Courses</NavLink>{" | "}
            <NavLink to="/about" activestyle_v02={activestyle_v02}>About</NavLink>
        </nav>

    )

}

export default Header;