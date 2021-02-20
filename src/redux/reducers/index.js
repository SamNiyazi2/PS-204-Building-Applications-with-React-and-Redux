
import { combineReducers } from 'redux';

import courses from './courseReducer';
import authors from './authorReducer';
import apiCallsInProgress from './apiStatusReducer';
import simulateAPIError from './simulateAPIErrorReducer';

const rootReducer = combineReducers( {
    courses,
    authors,
    apiCallsInProgress,
    simulateAPIError
} )

export default rootReducer;
