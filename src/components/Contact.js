import React, { useState } from "react";

import * as ReactBootStrap from "react-bootstrap"
import CustomBtn from './Button';

const styles ={
  card:{
      width:'80vw',
      alignItems: 'center',
      
  },
  container:{
      justifyContent: 'center',
      flexDirection: 'column'
  }
}
function Contact (){
  const [input, setInput] = useState({});
  // const []
  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    setInput({...input, [name]:value})
  }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const isValidEmail = validateEmail();
    if(!isValidEmail) return alert("that's not an email!")
    console.log(input)
  }

  const validateEmail = () => {
    //return if input.email matches pattern
    const pattern = new RegExp('.+@\..+');
    return pattern.test(input.email)
  }
  return(
    <div className="container d-flex" style={styles.container}>
 <div className="card d-flex justify-content-center"style={styles.card}>
 <h5 className="card-title">Leave me a Message</h5>
    <ReactBootStrap.Form>
    <ReactBootStrap.Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <ReactBootStrap.Form.Label>Name</ReactBootStrap.Form.Label>
    <ReactBootStrap.Form.Control type="text" placeholder="Name" value={input.name||''}
    name= "name" 
    onChange= {handleInputChange}
    />
    </ReactBootStrap.Form.Group>
  <ReactBootStrap.Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <ReactBootStrap.Form.Label>Email address</ReactBootStrap.Form.Label>
    <ReactBootStrap.Form.Control value={input.email || ''}
    name= "email" 
    onChange= {handleInputChange} type="email" placeholder="name@example.com" />
  </ReactBootStrap.Form.Group>
  <ReactBootStrap.Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <ReactBootStrap.Form.Label>Message</ReactBootStrap.Form.Label>
    <ReactBootStrap.Form.Control as="textarea" value={input.message || ''}
    name= "message" 
    onChange= {handleInputChange} placeholder="Please write a message" rows={3} />
  </ReactBootStrap.Form.Group>
  {/* <ReactBootStrap.Button variant="outline-primary" type="button" onClick={handleFormSubmit}>Submit</ReactBootStrap.Button> */}
  <CustomBtn variant="primary" type="button" onClick={handleFormSubmit} text="Submit"/>
  
</ReactBootStrap.Form>
    </div>
    </div>
  )
}



export default Contact;