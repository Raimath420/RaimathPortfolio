import React from 'react'
import HeroSection from './HeroSection'
import About from './About'
import Paralex from './Paralex'
import Projects from './Projects'
import Contact from './Contact'


const Home = () => {
    return (
        <div>
           <HeroSection/>
           <About/>
           <Paralex/>
           <Projects/>
           <Contact/>
        </div>
    )
}

export default Home
