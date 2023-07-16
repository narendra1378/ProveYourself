import React from "react";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";

// pages for this kit
import Login from './components/auth/login';
import Register from './components/auth/register';
import WithoutNav from './components/layout/withoutNav';
import WithNav from './components/layout/withNav';
import Home from './components/home/home';
import Contact from './components/sample/contact';
import WithOutNavHeader from "./components/layout/withoutHederNav";
import Courses from "components/courses/courses";
import Opening from "components/opening/opening";
import AboutUs from "components/aboutUS/aboutUs";
import ForgatePassOtp from "components/auth/ValidateOtp/forgatePassOtp";
import ValidateOpt from "components/auth/ValidateOtp/validateOtp";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<WithOutNavHeader/>}>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/forgate-password' element={<ForgatePassOtp />}/>
            <Route path='/verify-opt' element={<ValidateOpt/>}/>
          </Route>
          
          <Route element={<WithNav/>}>
             <Route path='/' element={<Home />} /> 
          </Route>

          <Route element={<WithOutNavHeader/>}>
             <Route path='/about' element={<AboutUs />} /> 
             <Route path='/contact-us' element={<Contact />} /> 
             <Route path='/courses' element={<Courses/>}/>
             <Route path='/opening' element={<Opening/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
