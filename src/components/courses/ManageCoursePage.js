
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { loadCourses } from '../../redux/actions/courseActions';
import { loadAuthors } from '../../redux/actions/authorActions';
import PropTypes from 'prop-types';

import CourseForm from './CourseForm';
import newCourse from '../../../tools/mockData';


function ManageCoursePage( { courses, authors, loadAuthors, loadCourses, ...props } ) {


    const [ course, setCourse ] = useState( props.course );
    const [ errors, setErrors ] = useState( {} );


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

        const { name, value } = event;

        setCourse( prevCourse => ( {
            ...prevCourse,
            [ name ]: name === "authorId" ? parseInt( value, 10 ) : value

        } ) );
    }

    return (
        <CourseForm course={course} errors={errors} authors={authors} onChange={handleChange} />
    )

}



ManageCoursePage.propTypes = {
    authors: PropTypes.array.isRequired,
    courses: PropTypes.array.isRequired,
    loadAuthors: PropTypes.func.isRequired,
    loadCourses: PropTypes.func.isRequired,
    course: PropTypes.object.isRequired
}


function mapStateToProps( state ) {

    return {
        courses: state.courses,
        authors: state.authors,
        course: newCourse,
    }
}


const mapSispatchToProps = {

    loadCourses: loadCourses,
    loadAuthors: loadAuthors

}

export default connect( mapStateToProps, mapSispatchToProps )( ManageCoursePage );