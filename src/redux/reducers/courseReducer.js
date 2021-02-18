

export default function courseReducer( state = [], action ) {

    switch ( action.type ) {


        case "CREATE_COURSE":

            // Both work.
            // return [ ...state, { ...action.course } ];
            return [ ...state, action.course ];


        default:

            return state;
    }

} 