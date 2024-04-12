import Home from "./class_component/Home";
import About from "./class_component/About";
import Counter from "./class_component/Counter";

function App() {
    let myData = {course:'React Js',duration:"10 Weeks"}; //Passing props from parent to child component
    return (
        <div>
            <h2>Welcome to React JS. </h2>
            <h3>This is React JS APP</h3>
            <Home data={myData} />
            <About />
            <Counter />
        </div>
    );
}

export default App;
