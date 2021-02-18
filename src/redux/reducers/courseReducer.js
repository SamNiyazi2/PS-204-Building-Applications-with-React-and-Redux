
import * as actionTypes from '../actions/actionTypes';

export default function courseReducer( state = [], action ) {

    switch ( action.type ) {


        case actionTypes.CREATE_COURSE:

            // Both work.
            // return [ ...state, { ...action.course } ];
            return [ ...state, action.course ];


        default:

            return state;
    }

} 