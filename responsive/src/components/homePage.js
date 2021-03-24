import React from 'react';

function homePage() {
    return (
        <div>
            <section className="s1">
      <div className="main-container">
        <div className="greeting-wrapper">
          <h1>Hello! My name is Ignacio Garcia.</h1>
          <h6>- GitHub: https://github.com/Agarc4777</h6>
          <h6>- Email : "mailto:tboss496.ag@gmail.com"</h6>
          <h6>- linkedin : https://www.linkedin.com/in/ignacio-garcia-b9b9a81b0/</h6>
          <h6>- resume : https://docs.google.com/document/d/1OT_2VPnV7euqzo7HY6kA4ydwbfEyDIp_H57_EENFL8k/edit?usp=sharing</h6>
        </div>
        <div className="intro-wrapper">
        </div>
            <div className="left-column">
                <img id="profile_pic" src="assets\images\headshot.png" alt="profile" />
            </div>
        </div>
    </section>
  <section className="s2">
    <div className="main-container">
      <div className="about-wrapper">
        <div className="about-me">
          <h4>More About Me</h4>
          <p>
          Hello, my name is Ignacio Garcia, I am a Full-Stack Developer in training. I have a considerable amount of knowledge in HTML and HTML5, CSS, JAVASCRIPT, NODE.JS, EXPRESS, MYSQL and REACT.JS. I love to learn new things and pushing myself to improve and be the best at what I do. 
          </p>
        </div>
       </div>
    </div>
  </section>
  </div>
    )
}

export default homePage;