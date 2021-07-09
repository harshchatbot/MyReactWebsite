import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService'
import FooterCompo from '../MyComponents/Footer'
import {
    BrowserRouter as Router,
    Switch,
    Route, Link
} from "react-router-dom";

import { Form } from "../MyComponents/Form";
import Counter from "../MyComponents/Counter";
import About from "../MyComponents/About";

import {withRouter} from 'react-router';





export class TodoApp extends Component {



    render() {





        return (
            <div className="TodoApp">
                {/* {<LoginComponent />}
                
                <FooterCompo/> */}
                {/* <WelcomeComponent/> */}
                <Router>

                    <>

                        <HeaderComponent />
                        <Switch>

                            <Route exact path="/welcome" component={WelcomeComponent} />
                            <Route exact path="/login" component={LoginComponent} />

                            <Route exact path="/todos" component={ListTodosComponent} />
                            <Route exact path="/logout" component={LogoutComponent} />

                            {/* <Route exact path="/about">
                            <About />
                        </Route> */}

                            <Route exact path="/form">
                                <Form />
                            </Route>

                            <Route exact path="/counter"><Counter /></Route>
                            <Route exact path="/about"><About /></Route>

                        </Switch>

                        <FooterCompo />

                </>
                </Router>
            </div>
        )


    }

}






export class WelcomeComponent extends Component {


    constructor(props) {
        super(props)
    }

    render() {
        

        return (

            <>

                <h1>Welcome!!</h1>
                
                {/* <div className="container">Welcome {this.props.match.params.name} to The TechFi, manage your links here <Link to="/todos">here</Link></div> */}
            </>

        )


    }

}


export function ErrorComponent(params) {
    return <div>

        <>
        <h1>Error, Invalid Page</h1>
        </>
    </div>
}






export class ListTodosComponent extends Component {


    constructor(props) {

        super(props)
        this.state = {
            todos: [  //here create array of todos for the list

                { id: 1, description: "Learn React", done: false, targetDate: new Date() },
                { id: 2, description: "Learn to act", done: false, targetDate: new Date() },
                { id: 3, description: "Learn to dance", done: false, targetDate: new Date() },
                { id: 4, description: "Learn to roll", done: false, targetDate: new Date() },
                { id: 5, description: "Learn to play guitar", done: false, targetDate: new Date() }

            ]
        }

    }


    render() {

        return (
            <div>
                <h1>List Todos</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Descereption</th>
                                <th>Target Date</th>
                                <th>Is Completed?</th>
                            </tr>
                        </thead>
                        <tbody>
                            {  //put curlt braces here to repeat this
                                this.state.todos.map(
                                    todo =>  //this arrow func defines how each of these elements should be shown

                                        <tr key={todo.id}>
                                            <td>{todo.id}</td>
                                            <td>{todo.description}</td>
                                            <td>{todo.targetDate.toString()}</td>
                                            <td>{todo.done.toString()}</td>
                                        </tr>
                                )

                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }



}






export class LoginComponent extends Component {




    //here we defined initial state or default values of username and pass
    constructor(props) {

        super(props)


        this.state = {
            //give you name is username iif you want your name to appear in the field by default
            username: '',
            password: '',
            hasLoginFailed: false,
            showsuccessmessage: false

        }
        //this.handeleUsernameChange = this.handeleUsernameChange.bind(this)
        //this.handelePasswordChange = this.handelePasswordChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)


        console.log(props)

    }



    //     handeleUsernameChange (event) {

    //             console.log(event.target.value);
    //             this.setState({
    //                 username : event.target.value
    //             })
    //     }


    //     handelePasswordChange (event) {

    //         console.log(event.target.value);
    //         this.setState({
    //             password : event.target.value
    //         })
    // }



    handleChange(event) {

        //console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        })
    }



    loginClicked() {

        //console.log(this.state)




        //usern: username, pass: test@123
        if (this.state.username === 'username' && this.state.password === '123') {


            this.props.history.push("/welcome");  //directly redirect to welcome component
            //this.props.history.push({WelcomeComponent});  //directly redirect to welcome component


            if(!window.location.hash) {
                window.location = window.location + '#loaded';
                window.location.reload();
            }

            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)   //this is how we called method

            //this.props.useHistory.push("/")
            this.setState({ showsuccessmessage: true })  //if success then update the state 
            this.setState({ hasLoginFailed: false })

        }

        else {

            //alert("Failed")
            //console.log("Failed")
            this.setState({ showsuccessmessage: false })
            this.setState({ hasLoginFailed: true })

        }


    }

    render() {

        return (

            //this below empty tag is basically called react fragment, or we can use <div? tag also in place of empty tags
            <>

                <h1 className="text-center">Login</h1>
                <div className="container my-3">
                    {/* User Name :<input type="text" name="username" value={this.state.username} onChange={this.handeleUsernameChange}/> */}
                    {/* <showInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} /> */}
                    {/* <ShowLoginSuccessMessage showsuccessmessage={this.state.showsuccessmessage}/> */}

                    {/* to remove func showInvalidCredentials using && operator and is easier */}
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showsuccessmessage && <div>Login Success</div>}

                    <div className="mb-3">
                        <label htmlFor="InputUserName" className="form-label">User Name</label>
                        <input type="text" name="username" className="form-control" placeholder="Enter username" value={this.state.username} onChange={this.handleChange} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="InputPassword1" className="form-label">Password</label>
                        <input type="password" name="password" className="form-control" placeholder="Enter password" value={this.state.password} onChange={this.handleChange} />
                    </div>


                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>

                    {/* User Name :<input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                Password : <input type="password" name="password" value={this.state.password} onChange={this.handleChange} /> */}
                    <button className="mb-3 ml-auto btn btn-success" onClick={this.loginClicked}>Login</button>


                    <p className="forgot-password text-right">
                        Already registered <a href="#">sign in?</a>
                    </p>

                </div>
            </>

        )

    }


}



export class LogoutComponent extends Component {
    render() {

        //below code auto refresh solution
        if(!window.location.hash) {
            window.location = window.location + '#loaded';
            window.location.reload();
        }


        return (
            <>
                <h1>You are logged out</h1>

                <div className="container">Thank you for using our Application!!</div>
            </>
        )
    }
}



export class HeaderComponent extends Component {


    // constructor(props) {
    //     super(props)
    // }



    render() {

        const userLoggedIn = AuthenticationService.isUserLoggedIn();
        console.log(userLoggedIn);


        

        return (
            //this <nav is navigation
            //navbar-expand-lg this is how arrangement of menu items like all comping together in left 
            //navbar-light bg-light

            // <header>
            //     <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            //         <div className="container-fluid">
            //             <Link className="navbar-brand" to="/">{this.title}</Link>
            //             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            //                 <span className="navbar-toggler-icon"></span>
            //             </button>
            //             <div className="collapse navbar-collapse" id="navbarSupportedContent">
            //                 <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            //                     <li className="nav-item">
            //                         <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            //                     </li>
            //                     {userLoggedIn &&  <li className="nav-item">
            //                         <Link className="nav-link" to="/about">About</Link>
            //                     </li>}

            //                     {userLoggedIn &&  <li className="nav-item">
            //                         <Link className="nav-link" to="/form">Form</Link>
            //                     </li>}

            //                     {userLoggedIn &&  <li className="nav-item">
            //                         <Link className="nav-link" to="/counter">Counter</Link>
            //                     </li>}

            //                     {userLoggedIn && <li className="nav-item">
            //                         <Link className="nav-link" to="/todos">Todos List</Link>
            //                     </li>}

            //                     {userLoggedIn && <li className="nav-item">
            //                         <Link className="nav-link" to="/welcome/username">Welcome</Link>
            //                     </li>}



            //                     <ul className="nav-bar navbar-collapse justify-content-end ml-auto">
            //                         {userLoggedIn &&  <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
            //                     </ul>

            //                     <ul className="nav-bar navbar-collapse justify-content-end">
            //                         {!userLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
            //                     </ul>



            //                 </ul>
            //                 {this.searchBar ? <form className="d-flex">
            //                     <input classNameName="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            //                     <button className="btn btn-outline-success" type="submit">Search</button>
            //                 </form> : ""}

            //             </div>

            //         </div>



            //     </nav>
            // </header>

            <header className="app-header header">
                <nav className="navbar navbar-expand-md navbar-dark bg-dark navbar-fixed-top">



                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">{this.title}</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav">

                                <li className="nav-link">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                {userLoggedIn && <li className="nav-link" >
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>}

                                {userLoggedIn && <li className="nav-link" >
                                    <Link className="nav-link" to="/form">Form</Link>
                                </li>}

                                {userLoggedIn && <li className="nav-link" >
                                    <Link className="nav-link" to="/counter">Counter</Link>
                                </li>}

                                {userLoggedIn && <li className="nav-link" >
                                    <Link className="nav-link" to="/todos">Todos List</Link>
                                </li>}

                                {userLoggedIn && <li className="nav-link" >
                                    <Link className="nav-link" to="/welcome/username">Welcome</Link>
                                </li>}


                            </ul>

                            <ul className="nav-bar navbar-collapse justify-content-end">
                                {userLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                                {!userLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                            </ul>

                        </div>

                    </div>

                </nav>

            </header>


        )

    }

}




// function showInvalidCredentials(props) {

//     if (props.hasLoginFailed) {

//         return <div>Invalid Credentials</div>
//     }
//     return null
// }


// function ShowLoginSuccessMessage(props) {

//     if (props.showsuccessmessage) {

//         return <div>Login Success</div>
//     }
//     return null
// }




export default TodoApp

