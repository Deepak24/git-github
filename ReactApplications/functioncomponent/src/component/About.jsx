import {useEffect, useState, useContext} from "react";
import CartContext from "../context/CartContext";

//Use of inbuilt hooks 
const About = () => {
    const {title, course, upDateCount } = useContext(CartContext);
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        const timerId = setInterval(() => setSeconds(s => s + 1 ), 1000);//Mounting 
        //Unmounting
        return () => clearInterval(timerId);
    }, []);

    const myCart = () => {

    }
    
    return(
        <>
            <h2>About Page</h2>
            <p>{title} ---- {course}</p>
            <h2>Elapsed Seconds {seconds }</h2>
            {/* <p>The name is {data.userName} and I am {data.age} years old.</p> */}
            <button onClick={myCart}>Increment</button>
            <p></p>
        </>
    )
}
export default About;