//Use of useState React hook in function component
import React, {useState} from "react";
import Myform from "./form/Myform";
function MyComponent() {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count+1);
    }

    return (
        <div>
            <p>Count Component.</p>
            <p>The count is : {count}</p>
            <button onClick={incrementCount} >Increment Count</button>
            <hr/><br/>
            <Myform />
        </div>
    )
}

export default MyComponent;