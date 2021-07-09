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
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route, useHistory
} from "react-router-dom";
import { createBrowserHistory } from 'history'


function App() {



  let initTodo;
  if (localStorage.getItem("todos") === null) {

    initTodo = [];

  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }

  const onDelete = (todo) => {
    console.log("i am on Delete of todo", todo);
    //let index = todos.indexOf(todo);
    //todos.splice(index, 1);
    //deleting this way in react will not work

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  let sno;
  const addTodo = (title, desc) => {
    alert("i am adding this todo", title, desc)
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;

    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }

    setTodos([...todos, myTodo]);
    console.log(myTodo);



    //if(localStorage.getItem("todos"));
  }

  // Declare a new state variable, which we'll call "todos"
  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));

  }, [todos])



  // [
  /* {
     sno: 1,
     title: "Go to the market",
     desc: "To buy egetables"
   },
   {
     sno: 2,
     title: "Go to the school",
     desc: "To buy books"
   },
   {
     sno: 3,
     title: "Go to the hospital",
     desc: "To buy medicines"
   }, */
  //])
  return (
    <>  {/*blank opening tag*/}

<div style={{ 
      backgroundImage: `url("https://via.placeholder.com/500")` 
    }}></div>

      <Router>
        <Header title="MyTodosList" searchBar={false} /> 
        {/* <HeaderComponent /> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" render={() => {
            return (


              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>)
          }}>

          </Route>
          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/form">
            <Form />
          </Route>

          <Route exact path="/counter">
            {/* <CounterButton />   
            <CounterButton by={5} />
            <CounterButton by={10} />    */}
            <Counter />
          </Route>

          {/* <Route exact path="/login">
            <TodoApp />
          </Route> */}

          {/* <Route exact path="/welcome" component={WelcomeComponent}/> 
          <Route exact path="/todos" component={ListTodosComponent}/>
          <Route exact path="/logout" component={LogoutComponent}/> */}
          {/* <Route  path="/welcome" component={WelcomeComponent}/> */}
          <Route exact path="/todos" component={ListTodosComponent} />
          <Route exact path="/logout" component={LogoutComponent} />


          <Route exact path="/welcome" component={WelcomeComponent} />
          <Route exact path="/login" component={LoginComponent} />


          {/* keep this error compo line in end only else error  */}
          {/* <Route exact path="" component={ErrorComponent}/>   */}
          <Route component={ErrorComponent} />





        </Switch>

        <FooterCompo  />
        
      </Router>
    </>
  );
}

export default App;
