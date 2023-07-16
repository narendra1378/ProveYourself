import React from 'react'
import HomeSection1 from './homeSection1'
import CoursesSection from './coursesSection'
import Instructor from './instructor'
import Students from './student'
import Opening from './opening'
import AboutUs from 'components/aboutUS/aboutUs'

export default function Home() {
  return (
    <div>
         
         <HomeSection1 />
         <AboutUs/>
         <CoursesSection/>
         <Instructor/>
         <Students/>
         <Opening/>
    </div>
  )
}
