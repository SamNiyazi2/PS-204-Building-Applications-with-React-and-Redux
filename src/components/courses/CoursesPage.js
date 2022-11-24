
// 02/17/2021 11:15 am - SSN - [20210217-1113] - [001] - M05-08 - Create course page

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as courseActions from '../../redux/actions/courseActions';
import * as authorActions from '../../redux/actions/authorActions';

import { bindActionCreators } from 'redux';
import CourseList from './CourseList';
import { Redirect } from 'react-router-dom';
import Spinner from '../common/spinner';
import { toast } from 'react-toastify';
import { simulateAPIError } from '../../redux/actions/simulateAPIErrorActions';

class CoursesPage extends React.Component {


    state = {
        redirectToAddCoursePage: false
    };


    componentDidMount() {

        if ( this.props.courses.length !== 0 ) return;

        this.props.loadCourses().catch( error => {
            alert( 'Loading courses failed\r\r' + error );
        } );

        this.props.loadAuthors().catch( error => {
            alert( 'Loading authors failed\r\r' + error );
        } );

    }


    handleDeleteCourse = async course => {

        // 11/23/2022 08:20 pm - SSN - Add confirmation
        if ( !confirm( "You can't undo deletes.\n\nAre you sure you want to delete record?" ) ) {
            return;
        }

        let courseId = course.id;
        let courseIndex = this.props.courses.indexOf( course );

        toast.success( "Course deleted: " + course.title );

        await this.props.deleteCourse( course, this.props.simulateAPIError_local )

            .catch( error => {

                toast.error( "Failed to delete course: " + course.title, { autoClose: false } );
                this.props.loadCourse( courseId, courseIndex );

                console.log( "Course delete failed. 20210219-0239" );
                console.log( error );
            } );

        // This displays after the process completes when the await keyword is used.
        toast.info( "Request was processed. (async/await)", { autoClose: 6000 } );

    }

    setSimulateAPIError( setting ) {
        this.props.simulateAPIError( setting );
    }


    render() {

        return (
            <>
                {this.state.redirectToAddCoursePage && <Redirect to="/course" />}
                <h2>Courses</h2>

                {this.props.loading ? <Spinner /> : (

                    <>
                        <button
                            style={{ marginBottom: 20 }}
                            className="btn btn-primary add-course"
                            onClick={() => this.setState( { redirectToAddCoursePage: true } )}>
                            Add Course
                        </button>
                        <p><input type="checkbox" onChange={( e ) => this.setSimulateAPIError( e.target.checked )} /> &nbsp; Simulate API error on delete </p>
                        <CourseList courses={this.props.courses} onDeleteClick={this.handleDeleteCourse} />
                    </>
                )}

            </>
        )
    }

}

function mapStateToProps( state ) {

    return {
        courses: state.authors.length === 0 ? [] : state.courses.map( course => {
            return {
                ...course,
                authorName: state.authors.find( a => a.id === course.authorId ).name
            }
        } ),
        authors: state.authors,
        loading: state.apiCallsInProgress > 0,
        simulateAPIError_local: state.simulateAPIError
    };
}

function mapDispatchToProps( dispatch ) {
    return {
        loadCourses: bindActionCreators( courseActions.loadCourses, dispatch ),
        loadAuthors: bindActionCreators( authorActions.loadAuthors, dispatch ),
        deleteCourse: bindActionCreators( courseActions.deleteCourse, dispatch ),
        loadCourse: bindActionCreators( courseActions.loadCourse, dispatch ),
        simulateAPIError: bindActionCreators( simulateAPIError, dispatch ),

    }
}


CoursesPage.propTypes = {

    courses: PropTypes.array.isRequired,
    authors: PropTypes.array.isRequired,
    loadCourses: PropTypes.func.isRequired,
    loadCourse: PropTypes.func.isRequired,
    loadAuthors: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    deleteCourse: PropTypes.func.isRequired,
    simulateAPIError: PropTypes.func.isRequired,
    simulateAPIError_local: PropTypes.bool.isRequired,

};


export default connect( mapStateToProps, mapDispatchToProps )( CoursesPage );
