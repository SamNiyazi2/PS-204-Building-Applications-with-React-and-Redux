

import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';


function actionTypeEndInSuccess( type ) {

    return type.substring( type.length - 8 ) === "_SUCCESS";
}


export default function apiCallsStatusReducer( state = initialState.apiCallsInProgress, action ) {

    console.log( 'apiCallsStatusReducer - 20210219-0107' );
    console.log( 'state:' );
    console.log( state );

    if ( action.type == actionTypes.BEGIN_API_CALL ) {
        return state + 1;

    } else if ( actionTypeEndInSuccess( action.type ) ) {
        return state - 1;
    }

    return state;

} 