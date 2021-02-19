
// The action name ending with success, triggers decrementing a counter that activate the spinner.
// BEGIN_API_CALL increments the counter and API_CALL_ERROR (on error) and any other action ending with "_SUCCESS" decrements
// the counter.  The spinner is activated when the counter is greater than 0.

export const LOAD_COURSES_SUCCESS = "LOAD_COURSES_SUCCESS";
export const LOAD_COURSE_SUCCESS = "LOAD_COURSE_SUCCESS";
export const LOAD_AUTHORS_SUCCESS = "LOAD_AUTHORS_SUCCESS";
export const CREATE_COURSE_SUCCESS = "CREATE_COURSE_SUCCESS";
export const UPDATE_COURSE_SUCCESS = "UPDATE_COURSE_SUCCESS";
export const BEGIN_API_CALL = "BEGIN_API_CALL";
export const API_CALL_ERROR = "API_CALL_ERROR";

export const DELETE_COURSE_OPTIMISTIC = "DELETE_COURSE_OPTIMISTIC";

