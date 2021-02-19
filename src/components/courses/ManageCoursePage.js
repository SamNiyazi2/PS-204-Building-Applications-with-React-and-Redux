
import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
import * as authorActions from '../../redux/actions/authorActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';


class ManageCoursePage extends Component {


    componentDidMount() {

        const { courses, authors, actions } = this.props;

        if ( courses.length === 0 ) {
            actions.loadCourses().catch( error => {
                alert( 'Loading courses failed.\n\n' + error );
            } );
        }

        if ( authors.length === 0 ) {
            actions.loadAuthors().catch( error => {
                alert( "Loading authors failed.\n\n" + error );
            } );

        }
    }



    render() {
        return (
            <div>
                <h2>Manage Course</h2>
            </div>
        )
    }

}



ManageCoursePage.propTypes = {
    authors: PropTypes.array.isRequired,
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}


function mapStateToProps( state ) {

    return {
        courses: state.courses,
        authros: state.authors
    }
}


function mapSispatchToProps( dispatch ) {
    return {
        actions: {
            loadCourses: bindActionCreators( courseActions.loadCourses, dispatch ),
            loadAuthors: bindActionCreators( authorActions.loadAuthors, dispatch )
        }
    }
}

export default connect( mapStateToProps, mapSispatchToProps )( ManageCoursePage );