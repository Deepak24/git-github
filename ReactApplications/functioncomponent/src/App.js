import Home from "./component/Home";
import About from "./component/About";
import Counter from "./component/Counter";
import Posts from "./component/Posts1";
import Users from "./component/Users";
import Mymemo from "./component/Mymemo1";//component for memorization

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./component/Nav";
import Notfound from "./component/Notfound";
import Contact from "./component/Contact";
//Importing the nested routes
import Pune from "./component/Pune";
import Mumbai from "./component/Mumbai";
import Delhi from "./component/Delhi";

function App() {
  const mydata = {userName: "Deepak", age : 25};
  return (
    <div>
          <Router>
                <h1>Welcome to React JS</h1>
                <Nav />
                <section className="container">
                    {/* Load the component when url match with the path */}
                    <Routes>
                        <Route path='' element={<Home />} />
                        <Route path='about' element={<About />} />
                        <Route path='counter' element={<Counter />} />
                        <Route path='users' element={<Users />} />
                        <Route path='posts' element={<Posts />} />
                        <Route path='memo' element={<Mymemo />} />
                        <Route path='contact' element={<Contact >
                            <Route path='pune' element={<Pune />} />
                            <Route path='mumbai' element={<Mumbai />} />
                            <Route path='delhi' element={<Delhi />} />
                        </Contact>} />
                        <Route path='*' element={<Notfound />} />
                    </Routes>
                </section>
                {/*<Mymemo />
                <Users />
                <hr />
                <Posts />
                <br />
                <Home />
                <hr/>
                <About data={mydata} />
                <hr/>
                <Counter /> */}
            </Router>
    </div>
  );
}

export default App;
