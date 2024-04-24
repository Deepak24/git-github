/**
 * Desription : We can maintain states using useState hook or we can remove
 *              Passing parameters or data from child to parent and parent to child component
 */

import React, {useState} from "react";
import ListItem from "../ListItem";
import Form from "./Form";

// const item1 = {
//     id : 1,
//     discountedPrice : 340,
//     price : 450,
//     title : "Title of the item 1",
//     thumbnail: "200x150.png"
// }

const Products = () => {

    const [item1, setItem1] = useState({
            id : 1,
            discountedPrice : 340,
            price : 450,
            title : "Title of the item 1",
            thumbnail: "200x150.png"
    });

    //Arrow function to handle all the cases
    const handleInput = event => {
        setItem1({
            ...item1,
            [event.target.name] : event.target.value
        });
    }

    //Handle Form arrow function
    const submitForm = event => {
        event.preventDefault();

        if(item1.discountedPrice > item1.price ) {
            alert("Discounted price can not be greater than price.");
            return;
        }
        console.log("Item Updated Successfully.", item1);
    }

    return(
        // <div className={"product-list"}>
        //     <div className={"product-list--wrapper"}>
                
        //     </div>
        // </div>

        <div className={"product-wrapper"}>
            <div className={"form"} >
                <Form item = {item1} onChangeInput={handleInput} onFormSubmission={submitForm} />
            </div>
            <div>
                <div >
                    <div className={"product-list"}>
                        <div className={"product-list--wrapper"}>
                            <ListItem data= {item1} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Products;