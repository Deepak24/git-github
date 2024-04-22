import AddToCartIcon from "../assets/icons/shopping-cart.svg"
import {useState} from "react";//For maintaining states we need to add build in method useState
const ListItem = ({data}) => {

    const [strMessage, setMessage] = useState("Not added to the cart yet.");

    const handleClick = () => {
        setMessage("Added to the cart!");
        console.log("Clicked!", strMessage);
    }
    
    return (
        // <h2>This is List Item component.</h2>
        <div className={"item-card"}>
            <img className={"image-fluid"} src={`/assets/${data.thumbnail}`} alt="product placehoolder" />
            <div className={"item-card__information"}>
                <div className={"pricing"}>
                    <span>Rs.{data.discountedPrice}</span>
                    <small>
                        <strike>{data.price}</strike>
                    </small>
                </div>
                <div className={"title"}>
                    <h2>{data.title}</h2>
                </div>
            </div>    
            <small className={"cart-message"}> {strMessage}</small>           
            <button className={"cart-add"} onClick={handleClick} >
                <span>Add to cart with prices</span>
                <img src={AddToCartIcon} alt = " Cart icon" width="20" height="20" />
            </button>
        </div>
    );
}

export default ListItem;