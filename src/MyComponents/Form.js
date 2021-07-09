import { SetFunctionName } from 'es-abstract';
import React from 'react'
import { useState } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { db } from '../Firebase';
import { HeaderComponent } from '../TodoWebapp/TodoApp';





export const Form = () => {

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");

  const splitButtonClick = (e1) => {
    e1.preventDefault();
    alert("Split button clicked")

  }

  const handleSelect = (e2) => {
    e2.preventDefault();
    setCountry(e2);
    //alert("Country selected")
    console.log(e2)

  }



  const handleSubmit = (e) => {
    e.preventDefault();

    //if (!email || !pass || !name || !country) {
      if (!email || !pass || !name) {
      alert("All fields are mandatory")

    } else {



      db.collection('contacts').add({
        email: email,
        pass: pass,
        name: name,
        //country: country
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
      setCountry("");


    }

    //alert("Data Saved");


  };


  return (
<>
  

    <form onSubmit={handleSubmit}>

      <div className="mb-3">
        <label htmlFor="exampleInputFirstName" className="form-label">First Name</label>
        <input type="text" className="form-control" id="exampleInputFirstName" onChange={(e) => setName(e.target.value)} />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => setPass(e.target.value)} />
      </div>




      <div className="mb-3">
        <button className="btn btn-secondary btn-sm" type="button" onClick={splitButtonClick}>
          Select Country
        </button>
        <button type="button" className="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
          <span className="visually-hidden">Toggle Dropdown</span>
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#" onClick={handleSelect}>India</a></li>
          <li><a className="dropdown-item" href="#">US</a></li>
          <li><a className="dropdown-item" href="#">UK</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item" href="#">http://localhost:3000/</a></li>
        </ul>
      </div>




      <button type="submit" className="btn btn-primary" >Submit</button>
    </form>

    </>

  )
}





