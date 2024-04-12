import React, {Component} from "react";

class Counter extends Component {
    //Define state
    constructor(props) {
        super(props);
        this.state = {count : 0};
    }

    Increment = () => { //Increment
        //Update State
        this.setState({count : this.state.count + 1});
    }
    
    Decrement = () => { //Decrement
        //Update State
        this.setState({count : this.state.count - 1});
    }

    render() {
        return(
            <>
                <h2>State Counter Example.</h2>
                <p>The Count is {this.state.count}</p>
                <button onClick={this.Increment} >Increment</button>
                <button onClick={this.Decrement} >Decrement</button>
            </>
        )
    }

}

export default Counter;