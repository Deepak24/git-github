import React, {useState} from "react";
import CartContext from "./CartContext";

export default function CartItems({children}) {
    const [count, setCount] = useState(0);
    const upDateCount = () => {
        setCount(count+1);
    }
    return(
        <div>
           
            <CartContext.Provider value={{ title : "Deepak", course : "MERN", mycount : count, mynewcount : upDateCount}} >
                {children}
            </CartContext.Provider>
        </div>
    )
}