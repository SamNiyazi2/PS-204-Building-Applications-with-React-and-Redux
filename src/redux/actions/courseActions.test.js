import * as courseActions from './courseActions';
import * as actionTypes from './actionTypes';
import { courses, newCourse } from '../../../tools/mockData';

import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';

// Test an async action
const middleware = [ thunk ];
const mockStore = configureMockStore( middleware );







describe( 'Async actions', () => {

    afterEach( () => {
        fetchMock.restore();
    } );


    describe( 'Load courses thunk', () => {

        it( 'should create BEGIN_API_CALL and LOAD_COURSES_SUCCESS when loading courses', () => {

            fetchMock.mock( '/undefined/courses/', {

                body: courses,
                //                headers: { 'content-type': 'application/json' }

            } );

            const expectedAction = [
                { type: actionTypes.BEGIN_API_CALL },
                { type: actionTypes.LOAD_COURSES_SUCCESS, courses }
            ];


            const store = mockStore( { courses: [] } );
            return store.dispatch( courseActions.loadCourses() ).then( () => {
                expect( store.getActions() ).toEqual( expectedAction );
            } );


        } );




        it( 'should create LOAD_COURSE_SUCCESS when loading a course', () => {

            fetchMock.mock( '/undefined/courses/', {

                body: courses

            } );

            const expectedAction = [
                { type: actionTypes.LOAD_COURSE_SUCCESS, course: courses[ 8 ] }
            ];


            const store = mockStore( { course: courses[ 10 ] } );
            return store.dispatch( courseActions.loadCourse( 9 ) ).then( () => {
                expect( store.getActions() ).toEqual( expectedAction );
            } );


        } );





        it( 'should create CREATE_COURSE_SUCCESS when creating a course', () => {

            let tempCourse = newCourse;

            fetchMock.mock( '/undefined/courses/', {

                body: tempCourse

            } );



            const expectedAction = [
                { type: actionTypes.BEGIN_API_CALL },
                { type: actionTypes.CREATE_COURSE_SUCCESS, course: tempCourse }
            ];


            const store = mockStore( { course: tempCourse } );
            store.dispatch( courseActions.saveCourse( tempCourse ) ).then( () => {
                expect( store.getActions() ).toEqual( expectedAction );
            } );


        } );





        it( 'should create UPDATE_COURSE_SUCCESS when updating a course', () => {

            let updateCourseId = 5;

            let tempCourse = courses.find( c => c.id === updateCourseId );

            tempCourse.category = "Test Category";
            tempCourse.authorId = 2;

            fetchMock.mock( "/undefined/courses/" + updateCourseId, {

                body: tempCourse

            } );



            const expectedAction = [
                { type: actionTypes.BEGIN_API_CALL },
                { type: actionTypes.UPDATE_COURSE_SUCCESS, course: tempCourse }
            ];


            const store = mockStore( { course: {} } );


            store.dispatch( courseActions.saveCourse( tempCourse ) ).then( () => {

                let storeGetActions = store.getActions();

                expect( storeGetActions ).toEqual( expectedAction );

                // console.log( storeGetActions );
                // console.log( expectedAction );

            } );




        } );




        describe( 'Delete course thunk', () => {

            it( 'should create DELETE_COURSE_OPTIMISTIC when deleting a course', () => {


                let updateCourseId = 5;

                let tempCourse = courses.find( c => c.id === updateCourseId );

                fetchMock.mock( '/undefined/courses/' + updateCourseId, {

                    //   body: tempCourse

                } );


                const expectedAction = [
                    { type: actionTypes.DELETE_COURSE_OPTIMISTIC, course: tempCourse }
                ];


                const store = mockStore();

                store.dispatch( courseActions.deleteCourse( tempCourse ) ).then( () => {

                    expect( store.getActions() ).toEqual( expectedAction );
                } );


            } );
        } );




    } );





} );





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
