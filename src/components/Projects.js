import React, { Component } from "react";
import * as ReactBootStrap from "react-bootstrap"

class Projects extends Component {
    render(){
        return(
            
            <ReactBootStrap.Container fluid>
                <ReactBootStrap.Col>

            <ReactBootStrap.Card style={{ width: '25rem' }}>
  <ReactBootStrap.Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/gitgoin-project.png"} alt = {"GitGoing Project"} />
 

</ReactBootStrap.Card>
<ReactBootStrap.Card style={{ width: '25rem' }}>
  <ReactBootStrap.Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/techBlog.png"} alt = {"TechBlog Project"} />
</ReactBootStrap.Card>
<ReactBootStrap.Card style={{ width: '25rem' }}>
  <ReactBootStrap.Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/Pet-connect.png"} alt = {"Pet Connect Project"} />
</ReactBootStrap.Card>
            </ReactBootStrap.Col>

            <ReactBootStrap.Col>
                {/* 2nd set of projects */}
            </ReactBootStrap.Col>
            </ReactBootStrap.Container>
        )
    }
}


export default Projects