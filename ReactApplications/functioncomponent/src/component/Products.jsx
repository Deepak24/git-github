import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

export default function Products() {
    const [prodData, setProData] = useState([]);
    const {cat} = useParams();//This hook from react router dom package
    useEffect(() => {
        let data = [
            {id: 1, cat: "Mens", prodName : "A", price : 235},
            {id: 2, cat: "Mens", prodName : "AA", price : 535},
            {id: 3, cat: "Womens", prodName : "B", price : 435},
            {id: 4, cat: "Womens", prodName : "AB", price : 455},
            {id: 5, cat: "Kids", prodName : "C", price : 655},
            {id: 6, cat: "Kids", prodName : "CC", price : 855},
            {id: 7, cat: "Kids", prodName : "CA", price : 3565},
        ];
        let filterData = data.filter(prod => prod.cat === cat);
        setProData(filterData);
    });
    return(
        <div>
            <h2>{ cat } Products</h2>
            <ul>
                {prodData.map(prod => 
                    <li key={prod.id}> {prod.prodName} price is {prod.price}</li>
                )}
            </ul>
        </div>
    )
}