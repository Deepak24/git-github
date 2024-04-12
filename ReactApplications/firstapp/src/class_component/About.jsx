import React, {Component} from "react";

class About extends Component {
    obj = {userName: "Deepak", age: 25};//Data binding
    render() {
        return(
            <>
                <h3>This is from About Component.</h3>
                <p>{this.obj.userName} is {this.obj.age} years old.</p>
            </>
        )
    }
}
export default About;