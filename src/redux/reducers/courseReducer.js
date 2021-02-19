
import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';


export default function courseReducer( state = initialState.courses, action ) {

    switch ( action.type ) {


        case actionTypes.CREATE_COURSE_SUCCESS:
            return [ ...state, action.course ];


        case actionTypes.UPDATE_COURSE_SUCCESS:
            return state.map( course => course.id === action.course.id ? action.course : course );


        case actionTypes.LOAD_COURSES_SUCCESS:
            return action.courses


        case actionTypes.LOAD_COURSE_SUCCESS:
            var newState = [ ...state ];
            newState.splice( action.courseIndex, 0, action.course );
            return newState;

        case actionTypes.DELETE_COURSE_OPTIMISTIC:
            return state.filter( c => c.id != action.course.id );


        default:
            return state;

    }

} 