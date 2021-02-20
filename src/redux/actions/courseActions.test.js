import * as courseActions from './courseActions';
import * as actionTypes from './actionTypes';
import { courses } from '../../../tools/mockData';


describe( 'createCourse:', () => {

    it( 'should create a CREATE_COURSE_SUCCESS action', () => {

        // Arrange
        const course = courses[ 0 ];
        const expectedAction = { type: actionTypes.CREATE_COURSE_SUCCESS, course };


        // Act
        const action = courseActions.createCourseSuccess( course );


        // Assert
        expect( action ).toEqual( expectedAction );


    } );


} );
