
import { combineReducers } from 'redux';

import courses from './courseReducer';
import authors from './authorReducer';
import apiCallsStatusReducer from './apiStatusReducer';

const rootReducer = combineReducers( {
    courses,
    authors,
    apiCallsStatusReducer
} )

export default rootReducer;
