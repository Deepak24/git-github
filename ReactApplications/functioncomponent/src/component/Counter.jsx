import { useState } from "react";

const Counter = () => {
    //Default State
    const [count, setCount] = useState(0);

    const Inc = () => {
        //Update the counter by 2+
        setCount(count+2);
    }

    const Dec = () => {
        //Update the counter by -1
        setCount(count-1);
    }

    return(
        <>
            <h2>State Counter Example</h2>
            <p>The counter is {count}</p>
            <button onClick={Inc}>++</button>
            <button onClick={Dec}>--</button>
        </>
    )
}

export default Counter;