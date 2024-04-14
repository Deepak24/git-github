import {useEffect, useState} from "react";

//Use of inbuilt hooks 
const About = ({data}) => {
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        const timerId = setInterval(() => setSeconds(s => s + 1 ), 1000);//Mounting 
        //Unmounting
        return () => clearInterval(timerId);
    }, []);
    return(
        <>
            <h2>About Page</h2>
            <h2>Elapsed Seconds {seconds }</h2>
            {/* <p>The name is {data.userName} and I am {data.age} years old.</p> */}
            <p></p>
        </>
    )
}
export default About;