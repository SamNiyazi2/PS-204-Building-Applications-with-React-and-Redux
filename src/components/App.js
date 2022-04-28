

import React from 'react';


// 04/28/2022 11:28 am - SSN - Switch to Routes
// import { Route, Routes, Switch } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import Header from './common/Header';
import PageNotFound from './PageNotFound';
import CoursesPage from './courses/CoursesPage';
import ManageCoursePage from './courses/ManageCoursePage'; //  */*/ eslint-disable-line import/no-named-as-default
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {

    return (

        <div className="container-fluid">
            <ToastContainer autoClose={3000} hideProgressBar />

            <Header></Header>
            {/* 
// 04/28/2022 11:27 am - SSN - Switch to Routes
            <Switch> 
            */}

            <Routes>
                <Route exact="true" path="/" element={<HomePage />} />
                <Route exact="true" path="/courses" element={<CoursesPage />} />
                <Route exact="true" path="/course/:slug" element={<ManageCoursePage />} />
                <Route exact="true" path="/course" element={<ManageCoursePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route component={PageNotFound} />
            </Routes>
        </div>
    );

}


export default App;