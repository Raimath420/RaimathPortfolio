import React from 'react'
import profile from './Images/photo-profil_1.jpg';

const HeroSection = () => {
  return (
    <>
      <section className="hero">
        <div className="container hero-section flex" id="home">
            <div className="hero-data flex">
                <span>Hello World!</span>
                <h1 id="name">I'am RAIMATH</h1>
                <p>
                    "Welcome to my digital space! I am a passionate and innovative computer science graduate with a knack for turning complex problems into elegant solutions. My journey in the world of technology has equipped me with a diverse skill set, from coding and algorithm design to software development and beyond. Join me as I showcase my projects, share my insights, and demonstrate how my love for coding translates into real-world impact. Let's explore the intersection of creativity and technology together!"
                </p>
                <div className="button">
                    <a className="btns" href="#contacts">CONTACT</a>
                    <a className="btns" href="#resume">MY CV</a>
                </div>
            </div>
            <div className="hero-image flex">
                <img src={profile} alt=""/>
            </div>
        </div>
    </section>
    </>
  )
}

export default HeroSection
