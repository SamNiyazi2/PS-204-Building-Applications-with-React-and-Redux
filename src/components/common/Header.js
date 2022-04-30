
import React from 'react';
import { NavLink } from 'react-router-dom';

// 04/29/2022 07:03 am - SSN 


import * as configApi from '../../api/configApi';

let endpoints = null;

configApi.getConfig().then( data => {

    console.log( '%c ' + 'xxxx-20220429-0736-AAA', 'color:yellow;font-size:14pt;' );
    console.dir( data );
    console.log( '%c ' + 'xxxx-20220429-0736-BBB', 'color:yellow;font-size:14pt;' );

} ).catch( error => {

    console.log( '%c ' + 'ZZZZ-20220429-0821', 'color:red;font-size:14pt;' );
    console.dir( error );
    console.log( '%c ' + 'ZZZ-20220429-0822', 'color:red;font-size:14pt;' );


} );






//dotenv.config();


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