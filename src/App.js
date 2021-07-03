import './App.css';
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import { AddTodo } from "./MyComponents/AddTodo";
import { About } from "./MyComponents/About";
import  Form  from "./MyComponents/Form";
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


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

      <Router>
        <Header title="MyTodosList" searchBar={false} />
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

        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
