import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import About from './About'
import Education from './Education'
import Projects from './Projects'
import Footer from './Footer'
function Home() {
  return (
    <div>
        <Navbar/>
         <Header/>
         <About/>
         <Education/>
         <Projects/>
         <Footer/>
         
    </div>
  )
}

export default Home