
import * as actionTypes from "./actionTypes"


export function simulateAPIError_Enable() {

    return { type: actionTypes.TRIGGER_API_ERROR_ENABLE };
}

export function simulateAPIError_Disable() {

    return { type: actionTypes.TRIGGER_API_ERROR_DISABLE };
}


export function simulateAPIError( setting ) {

    return function ( dispatch ) {

        if ( setting )
            dispatch( simulateAPIError_Enable() );
        else
            dispatch( simulateAPIError_Disable() );
    }
}