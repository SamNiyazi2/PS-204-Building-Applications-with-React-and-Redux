
// 02/17/2021 11:15 am - SSN - [20210217-1113] - [001] - M05-08 - Create course page

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as courseActions from '../../redux/actions/courseActions';
import { bindActionCreators } from 'redux';

class CoursesPage extends React.Component {


    render() {

        return (
            <>
                <h2>Courses</h2>

                {this.props.courses.map( course => (
                    <div key={course.title}> {course.title}</div>
                ) )}
            </>
        )
    }

}

function mapStateToProps( state ) {
    return {
        courses: state.courses
    };
}

function mapDispatchToProps( dispatch ) {
    return {
        actions: bindActionCreators( courseActions, dispatch )
    }
}


CoursesPage.propTypes = {

    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired

};


export default connect( mapStateToProps, mapDispatchToProps )( CoursesPage );
