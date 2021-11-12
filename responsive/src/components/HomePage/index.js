import React from 'react';
import "./style.css";
import Picture from "../../images/headshot.png";
import Image from 'react-bootstrap/Image';

function HomePage() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div class="clearfix" id="links">
            <Image src={Picture} class="col-md-6 float-md-end mb-3 ms-md-3" id="Img" alt="picture of me"/>
            <p>
            <h1 id="Contact">Hello! My name is Ignacio Garcia.</h1>
            <p>If you would like to reach out to me, here are some links to some of my accounts and my email</p>
            <h5>- GitHub: <a href="https://github.com/Agarc4777">Agarc4777</a></h5>
            <h5>- Email : <a href="mailto:tboss496.ag@gmail.com">Gmail</a></h5>
            <h5>- linkedin : <a href="https://www.linkedin.com/in/ignacio-garcia-b9b9a81b0">Ignacio-garcia</a></h5>
            <h5>- <a href="https://docs.google.com/document/d/1OT_2VPnV7euqzo7HY6kA4ydwbfEyDIp_H57_EENFL8k/edit?usp=sharing">Resume</a> -</h5>

            Hello, my name is Ignacio Garcia, I am a Full-Stack Developer in training. I have a considerable amount of knowledge in HTML and HTML5, CSS, JAVASCRIPT, NODE.JS, EXPRESS, MYSQL and REACT.JS. I love to learn new things and pushing myself to improve and be the best at what I do.
            </p>
          </div>
        </div>
      </div>
    )
}

export default HomePage;