
// 04/30/2022 06:28 pm - SSN 
// Souece: https://gist.github.com/clalimarmo/220aabaec0c8c0f6c936
// Source: https://smartlogic.io/blog/deep-linking-with-react-flux/

import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class AppLink extends React.Component {

    constructor( props ) {
        super( props );

        console.log( '%c ' + '20220430-1946', 'font-size:14pt;color:red' );
        console.dir( props );
        console.dir( this.props );

        this.RouteChange = this.RouteChange.bind( this );
    }


    RouteChange() {
        console.log( 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' );
        console.log( this.href );
        this.props.history.push( this.props.href );
    }



    render() {
        return (
            <a href={this.props.href} onClick={this.onClick}>
                {this.props.children}
            </a>
        );
    }

    onClick = ( event ) => {
        // don't reload page - dispatch a navigate Action, instead
        event.preventDefault();
        //Dispatcher.dispatch( {

        console.log( '%c ' + '20220430-1931', 'font-size:12pt;color:red' );
        console.dir( this.props );


        //const history = useHistory();
        //let navigate = useNavigate();
        //history.push( this.props.href );

        this.RouteChange();
    }
}
AppLink.propTypes = {

    href: PropTypes.string.isRequired,
    children: PropTypes.string,
    history: PropTypes.object,
};


export default withRouter( AppLink );