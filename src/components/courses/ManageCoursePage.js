
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { loadCourses, saveCourse } from '../../redux/actions/courseActions';
import { loadAuthors } from '../../redux/actions/authorActions';
import PropTypes from 'prop-types';

import CourseForm from './CourseForm';
import { newCourse } from '../../../tools/mockData';
import Spinner from '../common/spinner';
import { toast } from 'react-toastify';


//function ManageCoursePage( { courses, authors, loadAuthors, loadCourses, saveCourse, ...props2 } ) {
export function ManageCoursePage( props ) {

    let { courses, authors, loadAuthors, loadCourses, saveCourse } = props;

    const [ course, setCourse ] = useState( props.course );
    const [ errors, setErrors ] = useState( {} );
    const [ saving, setSaving ] = useState( false );

    useEffect( () => {


        if ( courses.length === 0 ) {
            loadCourses()
                .catch( error => {
                    alert( 'Loading courses failed.' );
                    alert( error );
                } );
        } else {
            setCourse( { ...props.course } );
        }

        if ( authors.length === 0 ) {
            loadAuthors()
                .catch( error => {
                    alert( "Loading authors failed." );
                    alert( error );
                } );

        }
    }, [ props.course, props.courses, props.authors ] );  // Runs only once with empty array.


    function handleChange( event ) {

        const { name, value } = event.target;

        setCourse( prevCourse => ( {
            ...prevCourse,
            [ name ]: name === "authorId" ? parseInt( value, 10 ) : value

        } ) );
    }


    function formIsValid() {

        const { title, authorId, category } = course;
        const errors = {};

        if ( !title ) errors.title = "Title is required";
        if ( !authorId ) errors.authorId = "Author is required";
        if ( !category ) errors.category = "Category is required";

        setErrors( errors );
        return Object.keys( errors ).length === 0;

    }


    function handleSaveRequest( event ) {

        event.preventDefault();

        if ( !formIsValid() ) return;


        setSaving( true );

        saveCourse( course ).then( () => {


            props.history.push( '/courses' );
            toast.success( "Course was saved." );


        } ).catch( error => {

            setSaving( false );

            toast.error( "Failed to save course." );

            setErrors( { onSave: error.message } );

            console.log( 'ManageCoursepage - handleSaveRequest - 20210219-0135' );
            console.log( error );


        } );
    }


    return (
        <>
            {authors.length === 0 || courses.length === 0 ? (

                <Spinner />

            ) : (

                    <CourseForm course={course} errors={errors} authors={authors} onChange={handleChange} onSave={handleSaveRequest} saving={saving} />
                )
            }

        </>
    )

}



ManageCoursePage.propTypes = {
    authors: PropTypes.array.isRequired,
    courses: PropTypes.array.isRequired,
    loadAuthors: PropTypes.func.isRequired,
    loadCourses: PropTypes.func.isRequired,
    saveCourse: PropTypes.func.isRequired,
    course: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
}


function mapStateToProps( state, ownProps ) {

    const slug = ownProps.match.params.slug;

    const courseSelected = slug && state.courses.length ? state.courses.find( r => r.slug === slug ) : ownProps.course ? ownProps.course : newCourse;

    return {
        courses: state.courses,
        authors: state.authors,
        course: courseSelected,
    }
}


const mapDispatchToProps = {

    loadCourses: loadCourses,
    loadAuthors: loadAuthors,
    saveCourse: saveCourse

}

export default connect( mapStateToProps, mapDispatchToProps )( ManageCoursePage );