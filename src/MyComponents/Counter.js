import React, { Component } from 'react'
import { HeaderComponent } from '../TodoWebapp/TodoApp';
import './Counter.css'


// function Counter ()  {
//     return (
//         <div className="counter"> 
//             This is an counter component!!
//             <button onClick={increment}>+1</button>
//             <span className="count">0</span>
            
//         </div>
//     )
// }


class Counter extends Component {


    constructor () {

        super();
        this.state = {
            counter : 0
        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }


render() {



    return(
<>
{/* <HeaderComponent/> */}
        <div className="counter"> 
                
        <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}/>
        <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
        <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
        <span className="count">{this.state.counter}</span>
        <div><button className="reset" onClick={this.reset}>Reset</button></div>

        
        
    </div>

</>
    )

}

    reset = () => {

        this.setState({counter : 0} 
        )

    }

//increment = (this.props.by) => {
    increment  (by) {

    //console.log(`increment from child - ${by}`);  here it is back-tick before one ok not single quotes
    //this.state.counter++   bad practise cuz in react we do not update state directly
    this.setState(
        (prevState) => {
        return {counter : prevState.counter + by}  //new value of counter 
    })
}



    decrement  (by) {

    //console.log(`increment from child - ${by}`);  here it is back-tick before one ok not single quotes
    //this.state.counter++   bad practise cuz in react we do not update state directly
    this.setState(
        (prevState) => {
        return {counter : prevState.counter - by}  //new value of counter 
    })
}



}


class CounterButton extends Component {

    constructor () {

        super();
        // this.state = {
        //     counter : 0
        // }

        //this.increment = this.increment.bind(this);
    }

    render() {

        return (
            <div className="counter"> 
                
                <button onClick={() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
                {/* <span className="count"  style = {{fontSize : "50px"}}>{this.state.counter}</span> */}
                {/* <span className="count">{this.state.counter}</span> */}
                <button onClick={() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
                
                

                
                
            </div>
        )

    }


    // increment = () => {

    //     //console.log("increment");
    //     //this.state.counter++   bad practise cuz in react we do not update state directly
    //     this.setState({
    //         counter : this.state.counter + this.props.by  //new value of counter 
    //     })

    //     this.props.incrementMethod(this.props.by);
    // }


    // decrement = () => {

    //     //console.log("increment");
    //     //this.state.counter++   bad practise cuz in react we do not update state directly
    //     this.setState({
    //         counter : this.state.counter + this.props.by  //new value of counter 
    //     })

    //     this.props.decrementMethod(this.props.by);
    // }

    
    
}

CounterButton.defaultProps = {

    by : 1
}


export default Counter