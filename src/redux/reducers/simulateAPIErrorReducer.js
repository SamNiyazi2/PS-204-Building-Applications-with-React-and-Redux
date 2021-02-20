

import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';



export default function simulateAPIErrorReducer( state = initialState.simulateAPIError, action ) {


    if ( action.type == actionTypes.TRIGGER_API_ERROR_ENABLE )
        return true;

    if ( action.type == actionTypes.TRIGGER_API_ERROR_DISABLE )
        return false;


    return state;

} 