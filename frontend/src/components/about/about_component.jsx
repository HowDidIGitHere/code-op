import React from 'react'
import "./about_component.css"
// import { connect } from 'react-redux';

class AboutComponent extends React.Component{

  render(){
    return(
      <div className="about">
        <div className="jamie">
          <img className="head" src="https://res.cloudinary.com/de8carnhu/image/upload/v1638916172/jamie_hfvbax.png" />
          <div className="social">
            <a className="github" href="https://github.com/HowDidIGitHere">
              <img src="https://res.cloudinary.com/de8carnhu/image/upload/v1638510015/githubicon_w6ympq.png"/>
            </a>
            <a className="linkedin" href="https://www.linkedin.com/in/jamie-an-6b9b41114/">
              <img src="https://res.cloudinary.com/de8carnhu/image/upload/v1638510015/linkedinbutton_r8xeco.png"/>
            </a>
          </div>
        </div>

        <div className="abraham">
          <img className="head" src="https://res.cloudinary.com/de8carnhu/image/upload/v1638916172/abe_os8okd.png" />
          <div className="social">
            <a className="github" href="https://github.com/abisfong">
              <img src="https://res.cloudinary.com/de8carnhu/image/upload/v1638510015/githubicon_w6ympq.png"/>
            </a>
            <a className="linkedin" href="https://www.linkedin.com/in/abraham-fong/">
              <img src="https://res.cloudinary.com/de8carnhu/image/upload/v1638510015/linkedinbutton_r8xeco.png"/>
            </a>
          </div>
        </div>

        <div className="nicole">
          <img className="head" src="https://res.cloudinary.com/de8carnhu/image/upload/v1638916509/nicole_kbknmp.png" />
          <div className="social">
            <a className="github" href="https://github.com/nicoletademaru">
              <img src="https://res.cloudinary.com/de8carnhu/image/upload/v1638510015/githubicon_w6ympq.png"/>
            </a>
            <a className="linkedin" href="https://www.linkedin.com/in/nicole-tademaru-7800abb7/">
              <img src="https://res.cloudinary.com/de8carnhu/image/upload/v1638510015/linkedinbutton_r8xeco.png"/>
            </a>
          </div>
        </div>

        <div className="kenny">
          <img className="head" src="https://res.cloudinary.com/de8carnhu/image/upload/v1638916165/Self_portrait_rneteu.jpg" />
          <div className="social">
            <a className="github" href="https://github.com/kcheng16">
              <img src="https://res.cloudinary.com/de8carnhu/image/upload/v1638510015/githubicon_w6ympq.png"/>
            </a>
            <a className="linkedin" href="https://www.linkedin.com/in/kcheng16/">
              <img src="https://res.cloudinary.com/de8carnhu/image/upload/v1638510015/linkedinbutton_r8xeco.png"/>
            </a>
          </div>
        </div>

      </div>
    )
  } 
}
// const mSTP = state => ({
// })

// const mDTP = dispatch => ({
// })

export default AboutComponent