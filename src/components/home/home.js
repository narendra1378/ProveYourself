import React from 'react'
import HomeSection1 from './homeSection1'
import HomeSection2 from './homeSection2'
import CoursesSection from './coursesSection'
import Instructor from './instructor'

export default function Home() {
  return (
    <div>
         
         <HomeSection1 />
         <HomeSection2 />
         <CoursesSection/>
         <Instructor/>
    </div>
  )
}
