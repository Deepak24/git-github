import {useState} from "react";

const TodoForm = ({onAddItem}) => {

    const [input, setInput] = useState(null);
    const [counter, setCounter] = useState(0);
    const [disabled, setDisabled] = useState(true);

    const handleInput = (e) => {
        setDisabled(false);
        if(!e.target.value) {
            setDisabled(true);
        }
        setInput(e.target.value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if(!input) {
            alert("Please enter list");
            return;
        }
        onAddItem({
            text : input,
            id : counter + 1
        })

        setCounter(counter+1);
        setInput(null);
        setDisabled(true);
    }

    return(
        <form onSubmit={handleFormSubmit}>
            <div className={"input-wrap"} >
                <input type="text" placeholder="Enter Your List.." value={input || ""} onChange={handleInput} />
                <button disabled={disabled} >Add</button>
            </div>
        </form>
    );
}

export default TodoForm;