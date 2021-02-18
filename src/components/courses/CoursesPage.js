
// 02/17/2021 11:15 am - SSN - [20210217-1113] - [001] - M05-08 - Create course page

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as courseActions from '../../redux/actions/courseActions';
import * as authorActions from '../../redux/actions/authorActions';

import { bindActionCreators } from 'redux';
import CourseList from './CourseList';

class CoursesPage extends React.Component {

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

        return (
            <>
                <h2>Courses</h2>
                <CourseList courses={this.props.courses} />
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
        authors: state.authors
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
    loadAuthors: PropTypes.func.isRequired

};


export default connect( mapStateToProps, mapDispatchToProps )( CoursesPage );
