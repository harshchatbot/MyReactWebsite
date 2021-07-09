import './App.css';
import './bootstrap.css'
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import FooterCompo from "./MyComponents/Footer";
import { AddTodo } from "./MyComponents/AddTodo";
import { About } from "./MyComponents/About";
import { Form } from "./MyComponents/Form";
import Counter from "./MyComponents/Counter";
import TodoApp, { WelcomeComponent, ErrorComponent, ListTodosComponent, LogoutComponent, HeaderComponent, LoginComponent } from './TodoWebapp/TodoApp';
import { db } from './Firebase';
import React, { useState, useEffect, Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route, useHistory
} from "react-router-dom";
import { createBrowserHistory } from 'history'


class App extends Component {

  render(){

    return (

      <div className="App">
      
        <TodoApp/>
        {/* <HeaderComponent/>
        <LoginComponent />
                
                <FooterCompo/>
        <FooterCompo/> */}
        </div>

    );
  }


}

export default App;
