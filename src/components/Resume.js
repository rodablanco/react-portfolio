import React, { useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
const styles ={
    card:{
        width:'60rem',
        alignItems: 'center'
    },
    container:{
        justifyContent: 'center',
        flexDirection: 'column'
    }
}

function Resume() {

    return(
        <div className="container d-flex"  bg="dark" style={styles.container}>
        <h1>Resume</h1>
<h5>Download my <a href="https://docs.google.com/document/d/1aiMkuqUSoaCxTayGbRoR0VRBcu0gXENdlHzQAmNcN-M/edit?usp=sharing">resume</a></h5>
        <div className="card d-flex justify-content-center"style={styles.card}>

        <h2>Front-End Profeciencies</h2>
        <ul className="list-unstyled">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>responsive design</li>
            <li>React</li>
            <li>Bootstrap</li>
        </ul>
        <h2>Back-End Proficiencies</h2>
        <ul className="list-unstyled">
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MYSQL, Sequelize</li>
            <li>NoSQL</li>
        </ul>
        </div>
        </div>
    )
}






export default Resume