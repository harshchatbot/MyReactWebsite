import React, { Component } from 'react'
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

        //this.increment = this.increment.bind(this);
    }

    render() {

        return (
            <div className="counter"> 
                
                <button onClick={this.increment}>+{this.props.by}</button>
                {/* <span className="count"  style = {{fontSize : "50px"}}>{this.state.counter}</span> */}
                <span className="count">{this.state.counter}</span>
                

                
                
            </div>
        )

    }


    increment = () => {

        //console.log("increment");
        //this.state.counter++   bad practise cuz in react we do not update state directly
        this.setState({
            counter : this.state.counter + this.props.by  //new value of counter 
        })
    }
    
}

Counter.defaultProps = {

    by : 1
}


export default Counter