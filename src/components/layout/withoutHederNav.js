import React from 'react'
import Header from './header/header';
import { Outlet } from 'react-router-dom';
import Footer from './footer/footer';
import NavBar from './navbar/navbar';
import OnlyNav from './navbar/onlynav';

export default function WithOutNavHeader() {
  return (
    <>
     <OnlyNav />
     <div className="wrapper">
       <div className='main'>
        <Outlet />
       </div> 
      <Footer />
      </div>
    </>
  )
}
