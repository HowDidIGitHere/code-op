import React from 'react'
import "./about_component.css"
// import { connect } from 'react-redux';

class AboutComponent extends React.Component{

  render(){
    return(
      <div className="about container-fluid">
        <div className="about-container row">
          <h1 className="connect">Let's connect!</h1>
          <div className="jamie col-md-3 col-6">
            <div className='head' style={{ backgroundImage: 'url(https://res.cloudinary.com/de8carnhu/image/upload/v1638916172/jamie_hfvbax.png)' }}></div>
            <h3>Jamie An</h3>
            <div className="social">
              <a className="github" href="https://github.com/HowDidIGitHere">
                <i className="fab fa-github"></i>
              </a>
              <a className="linkedin" href="https://www.linkedin.com/in/jamie-an-6b9b41114/">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="abraham col-md-3 col-6">
            <div className='head' style={{ backgroundImage: 'url(https://res.cloudinary.com/de8carnhu/image/upload/v1638916172/abe_os8okd.png)' }}></div>
            <h3>Abraham Fong</h3>
            <div className="social">
              <a className="github" href="https://github.com/abisfong">
                <i className="fab fa-github"></i>
              </a>
              <a className="linkedin" href="https://www.linkedin.com/in/abraham-fong/">
                <i className="fab fa-linkedin"></i>            
              </a>
            </div>
          </div>

          <div className="nicole col-md-3 col-6">
            <div className='head' style={{ backgroundImage: 'url(https://res.cloudinary.com/de8carnhu/image/upload/v1638916509/nicole_kbknmp.png)' }}></div>
            <h3>Nicole Tademaru</h3>
            <div className="social">
              <a className="github" href="https://github.com/nicoletademaru">
                <i className="fab fa-github"></i>
              </a>
              <a className="linkedin" href="https://www.linkedin.com/in/nicole-tademaru-7800abb7/">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="kenny col-md-3 col-6">
            <div className='head' style={{ backgroundImage: 'url(https://res.cloudinary.com/de8carnhu/image/upload/v1638916165/Self_portrait_rneteu.jpg)' }}></div>
            <h3>Kenny Cheng</h3>
            <div className="social">
              <a className="github" href="https://github.com/kcheng16">
                <i className="fab fa-github"></i>
              </a>
              <a className="linkedin" href="https://www.linkedin.com/in/kcheng16/">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

        </div>
      </div>
    )
  } 
}

export default AboutComponent