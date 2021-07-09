import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";
import AuthenticationService from '../TodoWebapp/AuthenticationService';

/*rfc function based component*/
/*props niche pass kia aur app.js me apna parent component hai, ye prop js object hai which is passed from parent component to child component*/
//export default function Header(props) {
export default class HeaderComponent extends Component{

  constructor(props){
    super(props)
  }

    render(){
      

   const userLoggedIn = AuthenticationService.isUserLoggedIn();
         console.log(userLoggedIn);

    return (
      //this <nav is navigation
      //navbar-expand-lg this is how arrangement of menu items like all comping together in left 
                                                //navbar-light bg-light
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">   
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{this.title}</Link>  
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              {userLoggedIn && <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>}

              {userLoggedIn && <li className="nav-item">
                <Link className="nav-link" to="/form">Form</Link>
              </li>}

              {userLoggedIn && <li className="nav-item">
                <Link className="nav-link" to="/counter">Counter</Link>
              </li>}

              

              <ul classname="nav-bar navbar-collapse justify-content-end ml-auto">
              {userLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
              </ul>

              <ul classname="nav-bar navbar-collapse justify-content-end">
              <li><Link className="nav-link" to="/login">Login</Link></li>
              </ul>
             
              
           
            </ul>
            { this.searchBar? <form className="d-flex">
              <input classNameName="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>: ""}
           
          </div>
          
        </div>

        
       
      </nav>
    )
    }
}

// this.Header.defaultProps = {
//     title: "Your Title here",
//     searchBar: true
// }

// this.Header.prototypes = {
//     title : PropTypes.string,
//     searchBar : PropTypes.bool.isRequired
// }


