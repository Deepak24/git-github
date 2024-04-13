import {useState, useMemo} from "react";
import { numberSquare } from "../custom-services/Mydata";

const Mymemo = () => {
    const [number, setNumber] = useState(0);
    const [counter, setCounter] = useState(0);
    //const squareNum = numberSquare(number);//without memorization
    const squareNum = useMemo(() => 
    {
        return numberSquare(number);//find square()
    }, [number]);
    

    const handler = (event) => {
        setNumber(event.target.value);
    }
    
    const Increment = () => {
        setCounter(counter+1);
    }

    return(
        <>
            <h2>useMemo inbuild hook </h2>
            <input type="text" placeholder="Enter Number" onChange={handler} />
            <div>
                <p>Square of Number {number} : {squareNum}</p>
                <button onClick={Increment}>++</button>
                <p>The counter is {counter}</p>
            </div>
        </>
    )
}

export default Mymemo;