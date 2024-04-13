import Home from "./component/Home";
import About from "./component/About";
import Counter from "./component/Counter";
import Posts from "./component/Posts1";
import Users from "./component/Users";
function App() {
  const mydata = {userName: "Deepak", age : 25};
  return (
    <div>
          <h1>Welcome to React JS</h1>
          <Users />
          <hr />
          <Posts />
          <br />
          <Home />
          <hr/>
          <About data={mydata} />
          <hr/>
          <Counter />
    </div>
  );
}

export default App;
