
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

    render() {

        console.log( 'render - 20210219-0049' );
        console.log( this.props.loading );

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

                        <CourseList courses={this.props.courses} />
                    </>
                )}

            </>
        )
    }

}

function mapStateToProps( state ) {

    console.log( 'mapStateToProps - 20210219-0104' );
    console.log( state );

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
    }
}


CoursesPage.propTypes = {

    courses: PropTypes.array.isRequired,
    authors: PropTypes.array.isRequired,
    loadCourses: PropTypes.func.isRequired,
    loadAuthors: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired

};


export default connect( mapStateToProps, mapDispatchToProps )( CoursesPage );
