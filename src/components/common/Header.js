
import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {

    const activeStyle = { color: '#F15B2A' };

    return (
        <nav>
            <p>({activeStyle.color}) ({process.env.API_URL})  ({( endpoints && endpoints.testbag102 ) ? endpoints.testbag102.APPSETTING_ps204_api_url : ""})</p>
            <NavLink to="/" activeStyle={activeStyle} exact>Home</NavLink>{" | "}
            <NavLink to="/courses" activeStyle={activeStyle} exact>Courses</NavLink>{" | "}
            <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
        </nav>

    )

}

export default Header;