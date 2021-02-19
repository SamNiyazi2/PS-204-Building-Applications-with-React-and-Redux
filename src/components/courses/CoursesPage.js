
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

class CoursesPage extends React.Component {


    state = {
        redirectToAddCoursePage: false,
        simulateAPIError: false
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


    handleDeleteCourse = course => {

        let courseId = course.id;
        let courseIndex = this.props.courses.indexOf( course );

        toast.success( "Course deleted: " + course.title );
        this.props.deleteCourse( course, this.state.simulateAPIError ).catch( error => {

            toast.error( "Failed to delete course: " + course.title, { autoClose: false } );
            this.props.loadCourse( courseId, courseIndex );

            console.log( "Course delete failed. 20210219-0239" );
            console.log( error );
        } );

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
                        <p><input type="checkbox" onChange={( e ) => this.setState( { simulateAPIError: e.target.checked } )} /> &nbsp; Simulate API error on delete </p>
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
        loading: state.apiCallsInProgress > 0
    };
}

function mapDispatchToProps( dispatch ) {
    return {
        loadCourses: bindActionCreators( courseActions.loadCourses, dispatch ),
        loadAuthors: bindActionCreators( authorActions.loadAuthors, dispatch ),
        deleteCourse: bindActionCreators( courseActions.deleteCourse, dispatch ),
        loadCourse: bindActionCreators( courseActions.loadCourse, dispatch ),

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

};


export default connect( mapStateToProps, mapDispatchToProps )( CoursesPage );
