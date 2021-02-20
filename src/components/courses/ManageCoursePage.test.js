
import React from 'react';
import { mount } from 'enzyme';
import { authors, courses, newCourse } from '../../../tools/mockData';



/////////////////////////////////////////////////////////////////////////////////
// The first exports the 'default' export: connected component.  The second imports the named export: component function. 
// import ManageCoursePage from './ManageCoursePage';
import { ManageCoursePage as ManageCoursePage_1 } from './ManageCoursePage'; // eslint-disable-line import/no-duplicates
/////////////////////////////////////////////////////////////////////////////////

// For Render_2: Using provider
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from '../../redux/configureStore';
import ManageCoursePage_2 from './ManageCoursePage'; // eslint-disable-line import/no-duplicates

global.API_URL = "mockedURL";

beforeEach( function () {

    // const getCourses = jest.fn( () => {
    //     console.log( "mocked getCourses" );
    //     console.log( "mocked getCourses" );
    //     console.log( "mocked getCourses" );
    //     console.log( "mocked getCourses" );
    // } );

    window.alert = jest.fn( ( p1 ) => {
        console.log( "window alert - Mocked function - Begin" )
        console.log( "window alert - Mocked function - Begin" )
        console.log( "window alert - Mocked function - Begin" )

        console.log( p1 );
        console.log( arguments );

        console.log( "window alert - Mocked function - End" )
        console.log( "window alert - Mocked function - End" )
        console.log( "window alert - Mocked function - End" )

    } );


    //     // When activated, shows call to fetch - For testing only.
    //     //    window.fetch = jest.fn( p1).mockImplementation( ( p1 ) => {
    //     window.fetch = jest.fn().mockImplementation( ( p1 ) => {

    //         console.log( 'mocked fetch' );

    //         console.log( p1 );

    //         let returnArray = [];

    //         if ( p1 === "undefined/courses/" ) {
    //             console.log( "List courses" )
    //             returnArray = courses;
    //         }
    //         if ( p1 === "undefined/authors/" ) {
    //             console.log( "List authors" )
    //             returnArray = authors;
    //         }

    //         let p = new Promise( ( resolve, reject ) => {
    //             resolve(
    //                 {
    //                     ok: true,

    //                     json: function () {
    //                         return returnArray; //[ { id: '123' } ]
    //                     }
    //                 } );
    //             // reject( { errorMessage: 'Mocked fetch call - Rejected-20210219-2341' } );
    //         } );

    //         return p;

    //     } );



} );
//


function render_1( args ) { // eslint-disable-line no-unused-vars

    const defaultProps = {

        authors,
        courses,
        saveCourse: jest.fn(),
        loadAuthors: jest.fn(),
        loadCourses: jest.fn(),
        course: newCourse,

        history: {},
        match: {}
    }

    const props = { ...defaultProps, ...args };

    // Enzyme uses a libarry (JSDOM) to create a full DOM in memory. 
    return mount( <ManageCoursePage_1 {...props} /> );

}

function render_2( args ) {

    const defaultProps = {

        authors,
        courses,
        saveCourse: jest.fn(),
        loadAuthors: jest.fn(),
        loadCourses: jest.fn(),
        course: newCourse,

        history: {},
        match: { params: {} }
    }

    const props = { ...defaultProps, ...args };

    const store_store = configureStore( { courses: courses, authors: authors } );

    // Enzyme uses a libarry (JSDOM) to create a full DOM in memory. 
    // When missing store 
    // TypeError: Cannot read property 'getState' of undefined
    return mount( <ReduxProvider store={store_store}><ManageCoursePage_2 {...props} /></ReduxProvider> );

}

describe( "ManageCoursePage:", () => {



    it( 'sets error when attempting to save an empty title field', () => {

        // const wrapper = render_1();
        let wrapper = render_2();

        // console.log( wrapper.debug() );
        // wrapper.setProps();
        //   wrapper.setState( { authors: [ ...authors ], courses: [ ...courses ] } );
        //  wrapper.setProps( { authors: [ ...authors ], courses: [ ...courses ] } );


        // wrapper = wrapper.update();

        // let x1 = wrapper.state();
        // let x2 = wrapper.props();

        // console.log( '1111111111111111111111111111111' );
        // console.log( '1111111111111111111111111111111' );
        // console.log( '1111111111111111111111111111111' );
        // console.log( '1111111111111111111111111111111' );
        // console.log( x1 );
        // console.log( x1.store.getState() );
        // console.log( x2 );
        // console.log( x2.children );
        // console.log( x2.children.props );



        // console.log( "ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZz" );
        // console.log( '---------------------------' );
        // console.log( '---------------------------' );
        // console.log( '---------------------------' );
        // console.log( '---------------------------' );
        // console.log( '---------------------------' );
        // console.log( wrapper.debug() );


        wrapper.find( 'form' ).simulate( 'submit' );
        const error = wrapper.find( '.alert' ).first();
        expect( error.text() ).toBe( 'Title is required' );



    } );




    it( 'sets error when attempting to save an empty author field', () => {

        // const wrapper = render_1();
        let newCourse_temp = Object.assign( {}, newCourse );
        newCourse_temp.title = "Some title";

        let wrapper = render_2( { course: newCourse_temp } );

        wrapper.find( 'form' ).simulate( 'submit' );
        const error = wrapper.find( '.alert' ).first();
        expect( error.text() ).toBe( 'Author is required' );



    } );


    it( 'sets error when attempting to save an empty category field', () => {

        // const wrapper = render_1();
        let newCourse_temp = Object.assign( {}, newCourse );
        newCourse_temp.title = "Some title";
        newCourse_temp.authorId = 1;

        let wrapper = render_2( { course: newCourse_temp } );

        wrapper.find( 'form' ).simulate( 'submit' );
        const error = wrapper.find( '.alert' ).first();
        expect( error.text() ).toBe( 'Category is required' );



    } );



} );

