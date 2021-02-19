
import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { loadCourses } from '../../redux/actions/courseActions';
import { loadAuthors } from '../../redux/actions/authorActions';
import PropTypes from 'prop-types';


function ManageCoursePage( { courses, authors, loadAuthors, loadCourses } ) {


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




    return (
        <div>
            <h2>Manage Course</h2>
        </div>
    )

}



ManageCoursePage.propTypes = {
    authors: PropTypes.array.isRequired,
    courses: PropTypes.array.isRequired,
    loadAuthors: PropTypes.func.isRequired,
    loadCourses: PropTypes.func.isRequired
}


function mapStateToProps( state ) {

    return {
        courses: state.courses,
        authors: state.authors
    }
}


const mapSispatchToProps = {

    loadCourses: loadCourses,
    loadAuthors: loadAuthors

}

export default connect( mapStateToProps, mapSispatchToProps )( ManageCoursePage );