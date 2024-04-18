import React, {useState} from "react";
import CartContext from "./CartContext";

export default function CartItems({children}) {
    const [count, setCount] = useState(0);
    const [cartItem, setCartItem] = useState(localStorage.getItem('mycart') != undefined ? JSON.parse(localStorage.getItem('mycart')) : []);
    const upDateCount = () => {
        setCount(count+1);
    }

    const updateCart = (data) => {
        setCartItem(data);
    }
    return(
        <div>
           
            <CartContext.Provider value={{ title : "Deepak", course : "MERN", mycount : count, mynewcount : upDateCount, cartData : cartItem, updateCart: updateCart }} >
                {children}
            </CartContext.Provider>
        </div>
    )
}