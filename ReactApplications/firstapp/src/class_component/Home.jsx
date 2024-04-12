import React, {Component} from "react";

class Home extends Component {
    title = "This is React Home component. Rendering with tittle variable";
    arrCourses = ["A", "B", "C", "D"];
    render(){
        return(
            <>
                <h2>{this.title}</h2>
                <p>
                    {this.props.data.course} duration is {this.props.data.duration}
                </p>
                <ul>
                    {this.arrCourses.map((val, ind) =>
                        <li key={ind}>{val}</li>
                    )}
                </ul>
            </>
        )
    }
}
export default Home;