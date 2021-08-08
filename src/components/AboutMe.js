import React, { Component } from "react";


class AboutMe extends Component {
    render(){
        return (
            <div className="container-fluid">

    <div className="title">
        <h1 className="mt-lg-3">Rod's Portfolio</h1>
        <div className="parent-pic mb-3">
            <img className="picture" src={process.env.PUBLIC_URL + "/images/rod-pic.jpg"} width="200" alt={"Rod Professional Picture"} />
            
        </div>
        <p className="mb-3">
            "May the best of your today, be the worst of your tomorrow" - Unknown
        </p>
        <h2>About me</h2>
        <p class="card-text">
                    I was born in Bolivia, but was raised in Southern California. I have
                    always found comfort in both cultures. I am the the younger of two
                    children. I grew up watching and playing basketball. My favorite
                    player of all time was Kobe Bryant.
                </p>
                <p>
                    After surviving 2020 I decided it was time to move on from my career
                    in Kinesiology, I decided to change paths and dive into the world of
                    coding. It has become something that I have a deep passion and feel like I will never stop learning! 
                </p>
    </div>
            </div>

            
      
        )
    }
}

export default AboutMe