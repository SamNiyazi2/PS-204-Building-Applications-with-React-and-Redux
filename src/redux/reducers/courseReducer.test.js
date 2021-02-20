import courseReducer from './courseReducer';
import * as courseActions from '../actions/courseActions';


describe( "CourseReducers:", () => {


    it( 'should add course when passed CREATE_COURSE_SUCCESS', () => {

        // Arrange
        const initialState = [
            { title: 'A' },
            { title: 'B' }
        ];

        const newCourse = { title: 'C' };

        const action = courseActions.createCourseSuccess( newCourse );


        // Act
        const newState = courseReducer( initialState, action );


        // Assert
        expect( newState.length ).toEqual( 3 );
        expect( newState[ 0 ].title ).toEqual( 'A' );
        expect( newState[ 1 ].title ).toEqual( 'B' );
        expect( newState[ 2 ].title ).toEqual( 'C' );


    } );



    it( 'should update course when passed UPDATE_COURSE_SUCCESS', () => {

        // Arrange
        const initialState = [
            { id: 1, title: 'A' },
            { id: 2, title: 'B' },
            { id: 3, title: 'C' },
        ];


        const modifiedCourse = { id: 2, title: 'New title' };

        const action = courseActions.updateCourseSuccess( modifiedCourse );


        // Act
        const newState = courseReducer( initialState, action );
        const updatedCourse = newState.find( c => c.id === modifiedCourse.id );
        const untouchedCourse = newState.find( c => c.id === 1 );


        // Assert
        expect( updatedCourse.title ).toEqual( 'New title' );
        expect( untouchedCourse.title ).toEqual( 'A' );
        expect( newState.length ).toEqual( 3 );


    } );


} );

