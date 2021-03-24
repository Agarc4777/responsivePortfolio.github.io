import React from 'react'

function projects() {
    return (
        <div className="main-container">
            <h3> a few of my projects </h3>
            <div className="post-wrapper">
                <div className="post" id= "1">
                    <img className="thumbnail" src="assets\images\burgers.png" alt="App image"></img>
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
                    <img className="thumbnail" src="assets\images\groupProject.png" alt="App imag" ></img>
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
                    <img className="thumbnail" src="assets\images\scheduler.jpg" alt="App imag" ></img>
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

export default projects;