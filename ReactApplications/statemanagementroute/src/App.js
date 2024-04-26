import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyComponent from "./component/mycomponent";
import Home from "./component/Home";
import About from "./component/About";
import Navigation from "./component/Navigation";

function App() {
  return (
    <div className="App">
        <h2>We are in parent or primary component.</h2>
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/mycomponent" element={<MyComponent />} />
            </Routes>
        </Router>
        
    </div>
  );
}

export default App;
