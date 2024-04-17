//Exploring the Home component
import { Link } from "react-router-dom";
const Home = () => {//Function components
    const courses = ["Angular", "React", "Vue Js", "Node Js", "Django"];

    return(
        <>
            <h2>Home Component - Function Component</h2>
            <ul>
                {courses.map((val, ind) => 
                    <li key={ind}> { val } </li>
                )}
            </ul>
            <Link to="/counter?id=101" >Counter</Link>
        </>
    )
}

export default Home;