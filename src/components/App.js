

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import Header from './common/Header';
import PageNotFound from './PageNotFound';
import CoursesPage from './courses/CoursesPage';
import ManageCoursePage from './courses/ManageCoursePage'; // eslint-disable-line import/no-named-as-default
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {

    return (

        <div className="container-fluid">
            <ToastContainer autoClose={3000} hideProgressBar />

            <Header></Header>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/courses" component={CoursesPage} />
                <Route exact path="/course/:slug" component={ManageCoursePage} />
                <Route exact path="/course" component={ManageCoursePage} />
                <Route path="/about" component={AboutPage} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    );

}


export default App;