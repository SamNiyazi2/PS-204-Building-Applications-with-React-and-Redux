
import * as actionTypes from './actionTypes';
import * as courseApi from '../../api/courseApi';
import { apiCallError, beginApiCall } from './apiStatusActions';


export function loadCoursesSuccess( courses ) {
    return { type: actionTypes.LOAD_COURSES_SUCCESS, courses };
}

export function loadCourseSuccess( course, courseIndex ) {
    return { type: actionTypes.LOAD_COURSE_SUCCESS, course, courseIndex };
}

export function createCourseSuccess( course ) {
    return { type: actionTypes.CREATE_COURSE_SUCCESS, course };
}


export function updateCourseSuccess( course ) {
    return { type: actionTypes.UPDATE_COURSE_SUCCESS, course };
}


export function deleteCourseOptimistic( course ) {
    return { type: actionTypes.DELETE_COURSE_OPTIMISTIC, course };
}


export function loadCourses() {

    return function ( dispatch ) {

        dispatch( beginApiCall() );

        return courseApi.getCourses().then( courses => {

            dispatch( loadCoursesSuccess( courses ) );

        } ).catch( error => {
            dispatch( apiCallError( error ) );
            throw error;
        } );
    }
}

export function loadCourse( courseId, courseIndex ) {

    return function ( dispatch ) {
        return courseApi.getCourses().then( courses => {

            dispatch( loadCourseSuccess( courses.find( c => c.id === courseId ), courseIndex ) );

        } ).catch( error => {
            dispatch( apiCallError( error ) );
            throw error;
        } );
    }
}


export function saveCourse( course ) {

    //eslint-disable-next-line no-unused-vars
    return function ( dispatch, getState ) {

        dispatch( beginApiCall() );

        return courseApi.saveCourse( course )

            .then( savedCourse => {
                course.id ? dispatch( updateCourseSuccess( savedCourse ) ) : dispatch( createCourseSuccess( savedCourse ) );
            } )

            .catch( error => {
                dispatch( apiCallError( error ) );
                throw error;
            } );
    }

}


export function deleteCourse( course, simulateAPIError ) {

    return function ( dispatch ) {

        dispatch( deleteCourseOptimistic( course ) );
        return courseApi.deleteCourse( course.id, simulateAPIError );

    }
}