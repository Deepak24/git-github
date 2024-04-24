/**
 * Desription : We can maintain states using useState hook or we can remove
 *              Passing parameters or data from child to parent and parent to child component
 */
import ListItem from "../ListItem1"
import React, {useState} from "react";

const item1 = {
    id : 1,
    discountedPrice : 340,
    price : 450,
    title : "Title of the item 1",
    thumbnail: "200x150.png"
}

const Products = () => {

    const [item, setItems] = useState([
        {
            id : 0,
            title : "Title of the item 1",
            price : 450,
            discountedPrice : 320,
            thumbnail : "200x150.png"
        },
        {
            id : 1,
            title : "Title of the item 2",
            price : 550,
            discountedPrice : 420,
            thumbnail : "200x150.png"
        },
        {
            id : 3,
            title : "Title of the item 3",
            price : 850,
            discountedPrice : 630,
            thumbnail : "200x150.png"
        },
        {
            id : 4,
            title : "Title of the item 4",
            price : 490,
            discountedPrice : 360,
            thumbnail : "200x150.png"
        }
    ]);

    return(

        <div className={"product-wrapper"}>
            <div>
                <div >
                    <div className={"product-list"}>
                        <div className={"product-list--wrapper"}>
                            {
                                item.map((item) => {
                                    console.log(item);
                                    return (
                                        <ListItem data={item} />
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    )
}

export default Products;