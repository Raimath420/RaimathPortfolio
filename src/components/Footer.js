import React from 'react'
import { NavLink } from 'react-router-dom';
import instgram from '../components/Images/instagram.svg';
import github from './Images/github.svg';
import faccebook from '../components/Images/facebook.svg';
import twitter from '../components/Images/twitter.svg';
import linkedin from '../components/Images/linkedin.png'


const Footer = () => {
  return (
    <div>
       <footer>
        <div className=" footer-section flex">
            <div className="socials flex">
                <h3>Socials</h3>
                <ul>
                    <li className="insta flex">
                        <img src={instgram} alt="" />
                        <a href="https://www.instagram.com/raimath_420" target="_blank" rel="noreferrer">Raimath_420</a>
                    </li>
                    
                    <li className="linkedin flex">
                        <img src={linkedin} alt=""/>
                        <a href="https://linkedin.com/in/raimath-ali/" target="_blank" rel="noreferrer">Linkedin/Raimath Ali</a>
                    </li>
                    
                    <li className="github flex">
                        <img src={github} alt=""/>
                        <a href="https://github.com/Raimath420" target="_blank" rel="noreferrer">Github/Raimath420</a>
                    </li>

                    <li className="facebook flex">
                        <img src={faccebook} alt=""/>
                        <a href="https://www.facebook.com/raimath.ali.7" target="_blank" rel="noreferrer">Raimath Gvt</a>
                    </li>

                    <li className="twitter flex">
                        <img src={twitter} alt=""/>
                        <a href="https://www.twitter.com" target="_blank" rel="noreferrer">Twitter</a>
                    </li>
                </ul>
            </div>
            <div className="navigations flex">
                <h3>Navigations</h3>
                <ul>
                    <li><NavLink to={"/home"}> Home</NavLink>
                    </li>
                    <li><NavLink to={"/about"}> About</NavLink></li>
                    <li><NavLink to={"/projects"}> Projects</NavLink> </li>
                    <li><NavLink to={"/contact"}> Contact</NavLink></li>
                </ul>
            </div>
            <div className="help flex">
                <h3>Have a Question</h3>
                <ul>
                    <li> Mail: raimath420@gmail.com</li>
                    <address>
                        <li> GANGAVATHI, Karnataka , India</li>
                    </address>
                    
                </ul>
            </div>

        </div>
        <div className="copy">
            <h4>Copyrights&copy; All Rights Resevered By RAIMATH_420</h4>
        </div>
    </footer>
    </div>
  )
}

export default Footer
