import {useState, useEffect} from "react";

const Timer = () => {
    const [counter, setCounter] = useState(0);
    
    //Use this hook to check effects and implement
    useEffect(() => {
        const timeInterval = setInterval(() => {
            setCounter(counter+1);
            console.log("Counter is not incresing but Interval is executing");
            setCounter (previousValue => previousValue +1);
        }, 1000);
        
        return () => {
            console.log("Timer component unmounted");
            clearInterval(timeInterval);    
        }
    }, []);

    return (
        <div>
            <h2>{counter} Seconds</h2>
        </div>
    )
}

export default Timer;