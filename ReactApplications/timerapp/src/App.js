import Timer from "./component/Timer";
import {useState} from "react";
function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="App">
        {toggle ? <p>Altternate Component </p> : <Timer />}
        <button onClick={() => setToggle(!toggle) }> Toggle</button>
    </div>
  );
}

export default App;
