/**
 * Desription : We can maintain states using useState hook or we can remove
 */

import React, {useState} from "react";
import ListItem from "../ListItem";

const item1 = {
    id : 1,
    discountedPrice : 340,
    price : 450,
    title : "Title of the item 1",
    thumbnail: "200x150.png"
}

// const item2 = {
//     id : 2,
//     discountedPrice : 100,
//     price : 80,
//     title : "Title of the item 2",
//     thumbnail: "200x150.png"
// }

const Products = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [discountedPrice, setDiscountedPrice] = useState(0);
    const [thumbnail, setThumbnail] = useState('');

    const [item1, setItem1] = useState({
            id : 1,
            discountedPrice : 340,
            price : 450,
            title : "Title of the item 1",
            thumbnail: "200x150.png"
    });

    // const [item2, setItem2] = useState({
    //     id : 2,
    //     discountedPrice : 100,
    //     price : 80,
    //     title : "Title of the item 2",
    //     thumbnail: "200x150.png"
    // });

    //Arrow function use to set the title
    const handleTitle = (event) => {
        console.log(event);
        setTitle(event.target.value);
        setItem1({
            ...item1,
            title : event.target.value
        });
    }

    //Arrow function to set price
    const handlePrice = event => {
        setPrice(event.target.value);
        setItem1({
            ...item1,
            price : event.target.value
        });
    }

    //Arrow function to set discounted price
    const handleDiscountedPrice = event => {
        setDiscountedPrice(event.target.value);
        setItem1({
            ...item1,
            discountedPrice : event.target.value
        });
    }
    //Arrow function to set thumbnail
    const handleThumbnail = event => {
        setThumbnail(event.target.value);
        setItem1({
            ...item1,
            thumbnail : event.target.value
        });
    }

    //Handle Form arrow function
    const submitForm = event => {
        event.preventDefault();
        console.log({
            title : title,
            price,
            discountedPrice,
            thumbnail
        });

        if(discountedPrice > price ) {
            alert("Discounted price can not be greater than price.");
            return;
        }
    }

    return(
        // <div className={"product-list"}>
        //     <div className={"product-list--wrapper"}>
                
        //     </div>
        // </div>

        <div className={"product-wrapper"}>
            <div className={"form"} >
                <form onSubmit={submitForm}>
                    <h2>Item Card Details</h2>
                    <div className={"input-field"}>
                        <label htmlFor="title">Title</label>
                        <input 
                            type="text" 
                            placeholder="Enter Title" 
                            value={title}
                            onChange={handleTitle} 
                            required />
                    </div>
                    <div className={"input-field"}>
                        <label htmlFor="title">Price</label>
                        <input 
                            type="text" 
                            placeholder="Enter Price" 
                            value={price}
                            onChange={handlePrice} 
                            required />
                    </div>
                    <div className={"input-field"}>
                        <label htmlFor="title">Discounted Price</label>
                        <input 
                            type="text" 
                            placeholder="Enter Discounted Price" 
                            value={discountedPrice}
                            onChange={handleDiscountedPrice} 
                            required />
                    </div>
                    <div className={"input-field"}>
                        <label htmlFor="title">Discounted Price</label>
                        <input 
                            type="text" 
                            placeholder="Enter Thumbnail Name" 
                            value={thumbnail}
                            onChange={handleThumbnail} 
                            required/>
                    </div>
                    <div className={"submit-wrap"} >
                        <button>Update</button>
                    </div>
                </form>
            </div>
            <div>
                <div >
                    <div className={"product-list"}>
                        <div className={"product-list--wrapper"}>
                            <ListItem data= {item1} />
                            {/* <ListItem data= {item2} /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Products;