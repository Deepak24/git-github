//Exploring the Home component

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
        </>
    )
}

export default Home;