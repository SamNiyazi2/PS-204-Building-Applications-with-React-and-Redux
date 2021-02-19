
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { loadCourses, saveCourse } from '../../redux/actions/courseActions';
import { loadAuthors } from '../../redux/actions/authorActions';
import PropTypes from 'prop-types';

import CourseForm from './CourseForm';
import { newCourse } from '../../../tools/mockData';


//function ManageCoursePage( { courses, authors, loadAuthors, loadCourses, saveCourse, ...props2 } ) {
function ManageCoursePage( props ) {


    // console.log( 'ManageCoursePage' );
    // console.log( 'props:' );
    // console.log( props );



    let { courses, authors, loadAuthors, loadCourses, saveCourse } = props;

    // console.log( 'props:' );
    // console.log( props );
    // console.log( 'courses:' );
    // console.log( courses );


    // console.log( '=================================================' );


    const [ course, setCourse ] = useState( props.course );
    const [ errors, setErrors ] = useState( {} );


    // console.log( 'course:' );
    // console.log( course );

    useEffect( () => {


        if ( courses.length === 0 ) {
            loadCourses().catch( error => {
                alert( 'Loading courses failed.\n\n' + error );
            } );
        }

        if ( authors.length === 0 ) {
            loadAuthors().catch( error => {
                alert( "Loading authors failed.\n\n" + error );
            } );

        }
    }, [] );  // Runs only once with empty array.


    function handleChange( event ) {

        const { name, value } = event.target;

        setCourse( prevCourse => ( {
            ...prevCourse,
            [ name ]: name === "authorId" ? parseInt( value, 10 ) : value

        } ) );
    }


    function handleSaveRequest( event ) {

        event.preventDefault();
        saveCourse( course );
    }


    return (
        <CourseForm course={course} errors={errors} authors={authors} onChange={handleChange} onSave={handleSaveRequest} />
    )

}



ManageCoursePage.propTypes = {
    authors: PropTypes.array.isRequired,
    courses: PropTypes.array.isRequired,
    loadAuthors: PropTypes.func.isRequired,
    loadCourses: PropTypes.func.isRequired,
    saveCourse: PropTypes.func.isRequired,
    course: PropTypes.object.isRequired
}


function mapStateToProps( state ) {

    return {
        courses: state.courses,
        authors: state.authors,
        course: newCourse,
    }
}


const mapDispatchToProps = {

    loadCourses: loadCourses,
    loadAuthors: loadAuthors,
    saveCourse: saveCourse

}

export default connect( mapStateToProps, mapDispatchToProps )( ManageCoursePage );