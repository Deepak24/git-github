//import AddToCartIcon from "../assets/icons/shopping-cart.svg";
import {useState} from "react";//For maintaining states we need to add build in method useState
const ListItem = ({data}) => {

    const [counter, setCounter] = useState(0);

    const increaseCounterByOne = () => {
        setCounter(counter + 1);
    }

    const decreaseCounterByOne = () => {
        if(counter <= 0 ) return;
        setCounter( counter - 1);
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
            {/* <button className={"cart-add"} onClick={handleClick} >
                <span>Add to cart with prices</span>
                <img src={AddToCartIcon} alt = " Cart icon" width="20" height="20" />
            </button> */}
            <div className={"cart-addon"}>
                <button onClick={decreaseCounterByOne}><span>-</span></button>
                <span className={"counter"}>{counter}</span>
                <button onClick={increaseCounterByOne}><span>+</span></button>
            </div>
        </div>
    );
}

export default ListItem;