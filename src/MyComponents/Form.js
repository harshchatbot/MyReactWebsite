import { SetFunctionName } from 'es-abstract';
import React from 'react'
import { useState } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { db } from '../Firebase';





export const Form = () => {

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!email || !pass || !name){
      alert("All fields are mandatory")
      
  } else{



    db.collection('contacts').add({
      email: email,
      pass: pass,
      name: name,
    })
      .then(() => {
        alert("Data Saved");
      })
      .catch((error) => {
        alert(error.message);
      });

    setEmail("");
    setPass("");
    setName("");


  }

    //alert("Data Saved");

     
  };


  return (


    <form onSubmit={handleSubmit}>

<div className="mb-3">
        <label for="exampleInputFirstName" className="form-label">First Name</label>
        <input type="text" className="form-control" id="exampleInputFirstName" onChange={(e) => setName(e.target.value)} />
      </div>

      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => setPass(e.target.value)} />
      </div>
    
      <button type="submit" className="btn btn-primary" >Submit</button>
    </form>

  )
}





