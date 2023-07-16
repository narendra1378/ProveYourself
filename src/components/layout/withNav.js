import React from 'react'
import Header from './header/header';
import { Outlet } from 'react-router-dom';
import Footer from './footer/footer';
import NavBar from './navbar/navbar';

export default function WithNav() {
  return (
    <>
     <NavBar />
     <div className="wrapper">
       <Header /> 
       <div className='main'>
        <Outlet />
       </div> 
      <Footer />
      </div>
    </>
  )
}
