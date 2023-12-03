import React from 'react'
import aboutimg from './Images/About img.jpeg'

const About = () => {
  return (
    <div>
      <section className="about">
        <h2>ABOUT</h2>
        <div className="about-section container grid-two" id="resume">
            <div className="about-image flex">
                <img src={aboutimg} alt=""/>
            </div>
            <div className="about-data flex">
                <h3>Skills & Technologies</h3>
                <div className="info flex">
                    <div className="info-col1">
                        <div>• JAVA</div>                  
                    </div>
                </div>

                <div className="info flex">
                    <div className="info-col1">
                        <div>• Python</div>     
                    </div>

                </div>

                <div className="info flex">
                    <div className="info-col1">
                        <div>• Javascript</div>                        
                    </div>      
                </div>

                <div className="info flex">
                    <div className="info-col1">
                        <div>• C</div>                       
                    </div>
                </div>

                <div className="info flex">
                    <div className="info-col1">
                        <div>• HTML</div>                        
                    </div>
                </div>

                <div className="info flex">
                    <div className="info-col1">
                        <div>• CSS</div>                        
                    </div>
                </div>

                <div className="info flex">
                    <div className="info-col1">
                        <div>• C#</div>                       
                    </div>
                </div>

                <div className="info flex">
                    <div className="info-col1">
                        <div>• React.JS</div>                        
                    </div>          
                </div>

                <div className="info flex">
                    <div className="info-col1">
                        <div>• SQL</div>                      
                    </div>
                </div>

                <div className="info flex">
                    <div className="info-col1">
                        <div>• Bootstrap</div>  
                    </div>
                </div>

                <h3>Education</h3>
                <div className="info flex">
                    <div className="info-col1">
                        <h4>Bachelor of Computer Application</h4>
                        <p>VSK University Ballari,Karnataka</p>
                    </div>

                    <div className="info-col2 flex">
                        <div>87.5%</div>
                        <span>2020-2023</span>
                    </div>
                </div>
                <div className="info flex">
                    <div className="info-col1">
                        <h4>PUC</h4>
                        <p>KLE PU College Gangavathi</p>
                    </div>

                    <div className="info-col2 flex">
                        <div>77%</div>
                        <span>2018-2020</span>
                    </div>
                </div>
                <div className="info flex">
                    <div className="info-col1">
                        <h4>SSLC</h4>
                        <p>MMDR School Gangavathi</p>
                    </div>

                    <div className="info-col2 flex">
                        <div>77%</div>
                        <span>2013-2018</span>
                    </div>
                </div>

                <h3>Languages</h3>
                <div className="info flex">
                    <div className="info-col1">
                        <div>• English</div>                                   
                    </div>
                </div>
                <div className="info flex">
                    <div className="info-col1">
                        <div>• Hindi</div>                                   
                    </div>
                </div>
                <div className="info flex">
                    <div className="info-col1">
                        <div>• Kannada</div>                                   
                    </div>
                </div>

            </div>

        </div>
    </section>
    </div>
  )
}

export default About
