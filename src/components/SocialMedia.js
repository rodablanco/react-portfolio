import React, { useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const styles={
    thumbnail:{
        height: "4rem",
        width: "5rem"
    }
}

function SocialMedia(){
return (
    <div className="container ">

    <button>
        <a href="https://github.com/rodablanco" target="_blank">

        <img src={process.env.PUBLIC_URL + '/images/GitHub-Mark-64px.png'} />
        </a>
    </button>
  
              
    <button >
        
        <a style={styles.thumbnail} href="https://www.linkedin.com/in/rod-blanco-33151477?trk=profile-badge" target="_blank">

        <img style={styles.thumbnail}  src={process.env.PUBLIC_URL + '/images/LI-In-Bug.png'} />
        </a>
    </button>

    <button>
        <a href="https://github.com/rodablanco" target="_blank">

        <img style={styles.thumbnail} src={process.env.PUBLIC_URL + '/images/apple-touch-icon.png'} />
        </a>
    </button>
    </div>
)
}


export default SocialMedia;