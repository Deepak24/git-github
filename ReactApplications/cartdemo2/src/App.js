import Products from "./component/products/Products";
import Header from "./component/Layout/Header";
import Subheader from "./component/Layout/Subheader";
import {useState} from "react";

function App() {
    const [cartItem, setCartItem] = useState(0);

    const handleAddItem = () => {
        setCartItem(cartItem + 1);
    }

    const handleRemoveItem = () => {
        setCartItem(cartItem - 1);
    }

    return (
        <div className="App">
            <Header count={cartItem} />
            <Subheader />
            <Products onAddItem={handleAddItem} onRemoveItem={handleRemoveItem} />
        </div>
    );
}

export default App;
