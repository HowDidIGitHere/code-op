import React from 'react'
import "./about_component.css"
// import { connect } from 'react-redux';

class AboutComponent extends React.Component{

  render(){
    return(
      <div className="about">
        <h1 className="connect">Let's connect!</h1>

        <div className="about-container">
          <div className="jamie">
            <img className="head" src="https://res.cloudinary.com/de8carnhu/image/upload/v1638916172/jamie_hfvbax.png" alt=""/>
            <h3>Jamie An</h3>
            <div className="social">
              <a className="github" href="https://github.com/HowDidIGitHere">
                <i class="fab fa-github"></i>
              </a>
              <a className="linkedin" href="https://www.linkedin.com/in/jamie-an-6b9b41114/">
                <i class="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="abraham">
            <img className="head" src="https://res.cloudinary.com/de8carnhu/image/upload/v1638916172/abe_os8okd.png" alt="" />
            <h3>Abraham Fong Silva</h3>
            <div className="social">
              <a className="github" href="https://github.com/abisfong">
                <i class="fab fa-github"></i>
              </a>
              <a className="linkedin" href="https://www.linkedin.com/in/abraham-fong/">
                <i class="fab fa-linkedin"></i>            
              </a>
            </div>
          </div>

          <div className="nicole">
            <img className="head" src="https://res.cloudinary.com/de8carnhu/image/upload/v1638916509/nicole_kbknmp.png" alt=""/>
            <h3>Nicole Tademaru</h3>
            <div className="social">
              <a className="github" href="https://github.com/nicoletademaru">
                <i class="fab fa-github"></i>
              </a>
              <a className="linkedin" href="https://www.linkedin.com/in/nicole-tademaru-7800abb7/">
                <i class="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="kenny">
            <img className="head" src="https://res.cloudinary.com/de8carnhu/image/upload/v1638916165/Self_portrait_rneteu.jpg" alt="" />
            <h3>Kenny Cheng</h3>
            <div className="social">
              <a className="github" href="https://github.com/kcheng16">
                <i class="fab fa-github"></i>
              </a>
              <a className="linkedin" href="https://www.linkedin.com/in/kcheng16/">
                <i class="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

        </div>
      </div>
    )
  } 
}

export default AboutComponent