import Products from "./component/products/Products";
import Header from "./component/Layout/Header";
import Subheader from "./component/Layout/Subheader";
import {useState} from "react";

function App() {
    const [cartItem, setCartItem] = useState([]);
    const [eventQueue, setEventQueue] = useState({id: "", type:"" });

    const handleAddItem = (item) => {
        let items = [...cartItem];
        let index = items.findIndex(i => i.id === item.id)
        if(index > -1){
            items[index] = item
        } else {
            items.push(item);
        }
        setCartItem([...items]);
        // setCartItem(cartItem + 1);
    }

    const handleRemoveItem = (item) => {
        let items = [...cartItem];
        let index = items.findIndex(i => i.id === item.id);
        if(items[index].quantity === 0) {
            items.splice(index,1);
        } else{
            items[index] = item;
        }
        setCartItem([...items]);    
        // setCartItem(cartItem - 1);
    }

    //type === -1 then decrese
    //type === 1 then increse
    const handleEventQueue = (id, type) => {
        console.log({id, type});
        setEventQueue({id, type});
    }

    return (
        <div className="App">
            <Header count={cartItem.length} items={cartItem} onHandleEvent={handleEventQueue}/>
            <Subheader />
            <Products 
                onAddItem={handleAddItem} 
                onRemoveItem={handleRemoveItem} 
                eventState={eventQueue} 
            />
        </div>
    );
}

export default App;
