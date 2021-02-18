
// 02/17/2021 11:15 am - SSN - [20210217-1113] - [001] - M05-08 - Create course page

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as courseActions from '../../redux/actions/courseActions';

class CoursesPage extends React.Component {

    constructor( props ) {
        super( props );

        this.state = {
            course: {
                title: ""
            }
        };

        // Binding in the constructor.  Prevents having to using binding in the render function which causes a new instance of the function to be created with every render.
        // this.handleChange = this.handleChange.bind( this );

    }




    // bind
    handleChange = ( event ) => {
        const course = { ...this.state.course, title: event.target.value };

        // this.setState( course );
        this.setState( { course } );

    }

    // Or (with bind(this) in the constructor)
    // handleChange( event ) {
    //     const course = { ...this.state.course, title: event.target.value };

    //     // this.setState( course );
    //     this.setState( { course } );

    // }



    handleSubmit = ( event ) => {

        event.preventDefault();

        console.log( '20210217-1714' )
        console.log( this.state.course.title );

        this.props.dispatch( courseActions.createCourse( this.state.course ) )

    }


    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Courses</h2>
                <h3>Add Course</h3>
                <input type="test" onChange={this.handleChange} value={this.state.course.title} autoFocus />
                <input type="submit" value="Submit" />
            </form>
        )
    }

}

function mapStatesToProps( state ) {
    return {
        courses: state.courses
    };
}



CoursesPage.propTypes = {

    dispatch: PropTypes.func.isRequired
};


export default connect( mapStatesToProps )( CoursesPage );
