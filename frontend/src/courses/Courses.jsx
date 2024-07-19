import React from 'react'
import Navbar from '../components/Navbar'
import Course from '../components/Course'
import Footer from '../components/Footer'
import lists from '../assets/lists.json'



function Courses() {
  console.log(lists)
  
  return (
   <>
   <Navbar/>
   <div className='min-h-screen'>
   <Course/>
   </div>
  
   <Footer/>
   </>
  )
}

export default Courses