import React, {useState, useEffect, useContext} from "react";
import CartContext from "../context/CartContext";

export default function Myproducts() {
    const {updateCart} = useContext(CartContext);
    const [proData, setProData] = useState([]);
    useEffect(() => {
        setInterval(() => {
            let data = [
                { "id" : 1, "name" : "A", "price" : 2345, "quantity" : 3 },
                { "id" : 2, "name" : "B", "price" : 3345, "quantity" : 3 },
                { "id" : 3, "name" : "C", "price" : 4345, "quantity" : 4 },
                { "id" : 4, "name" : "D", "price" : 5345, "quantity" : 6 },
                { "id" : 5, "name" : "E", "price" : 1345, "quantity" : 2 }
            ];
            setProData(data);
        }, 3000);
    }, []);

    const addCart = (id) => {
        if( localStorage.getItem('mycart') != undefined ) {
            let arr = JSON.parse(localStorage.getItem('mycart'));
            if(arr.includes(id)) {
                alert("Product already in cart");
            }else {
                arr.push(id);
                localStorage.setItem("mycart", JSON.stringify(arr));
                updateCart(arr);//Add in context
                alert("Cart Added Successfully");
            }
        } else {
            let arr = [];
            arr.push(id);
            localStorage.setItem("mycart", JSON.stringify(arr));
            updateCart(arr);//Add in context
            alert("Cart Added Successfully.");
        }
    }
    return (
        <div>
            <h2>Latest Products</h2>
            <div className="row">
                {proData.map(pro => 
                    <div key={pro.id} className="col-sm-4">
                        <h4>{pro.name}</h4>
                        <p>
                            Price : Rs. {pro.price} <br/>
                            Quantity: {pro.quantity}
                        </p>
                        <button className="btn btn-primary" onClick={() => addCart(pro.id)} >
                            Add Cart
                        </button>
                    </div>
                )}
            </div>

        </div>
    )
}