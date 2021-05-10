import React from 'react'
import "./style.css";
import Image from 'react-bootstrap/Image';
import Burgers from "../../images/burgers.png";
import GroupPro from "../../images/groupProject.png";
import Scheduler from "../../images/scheduler.png";


function Projects() {
    return (
        <div className="main-container">
            <h3 id="project"> Heres a few of my projects </h3>
            <div className="post-wrapper">
                <div className="post" id= "1">
                    <Image src={Burgers} id="ProPic"/>
                    <div className="post-preview">
                        <h6 className="post-title"></h6>
                        <div className="project-links">
                            <a rel="noopener" href="https://github.com/Agarc4777/burger.github.io">See my Project here!</a>
                        </div>
                        <p>
                            This is my Burgers app. I used Herokuapp to deploy the live link. This app allows you to add a burger to the list and choose wether you have eaten it or wether you want to eat it.
                        </p>
                    </div>
                </div>
                <div className="post" id= "2">
                    <Image src={GroupPro} id="ProPic"/>
                    <div className="post-preview">
                        <h6 className="post-title"></h6>
                        <div className="project-links">
                            <a rel="noopener" href="https://github.com/Agarc4777/Food-Truck-Finder">See my Project here!</a>
                        </div>
                        <p>
                        This is my very first group project. We designed a website that allows users to find food truck(s) near their location. It provides a Phone number, (If applicable), an address, an image, (if applicable), and the name of the food truck.
                        </p>
                    </div>
                </div>
                <div className="post" id= "3">
                    <Image src={Scheduler} id="ProPic"/>
                    <div className="post-preview">
                        <h6 className="post-title"></h6>
                        <div className="project-links">
                            <a rel="noopener" href="https://github.com/Agarc4777/WorkdayScheduler.github.io">See my Project here!</a>
                        </div>
                        <p>
                        I feel like this is a personal accomplishment because I really learned how to dynamically create HTML with JavaScript. This is where I began to really understand and apply everything I have learned to a real world application.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Projects;