import AddToCartIcon from "../assets/icons/shopping-cart.svg";
import {useState, Fragment} from "react";//For maintaining states we need to add build in method useState
import Modal from "./UI/Modal";

const ListItem = ({data, updateItemTitle, onAdd, onRemove}) => {
    //Declare counter variable
    const [counter, setCounter] = useState(0);
    const [showModal, setShowModal] = useState(false);

    //Define the function to increse the count
    const increaseCounterByOne = (event) => {
        event.stopPropagation();
        onAdd(data.id);
        setCounter(counter + 1);
    }

    //Define function to decrese the count
    const decreaseCounterByOne = (event) => {
        event.stopPropogation();//stops event propagation   
        if(counter <= 0 ) return;
        if(counter === 1) {
            onRemove(data.id);
        }
        setCounter( counter - 1);
    }

    const handleModal = () => {
        setShowModal(previousState => !previousState);
    }
    
    return (
        // <h2>This is List Item component.</h2>
        <Fragment>
            <div onClick={handleModal} className={"item-card"}>
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
                <button onClick={() => updateItemTitle(data.id)}>Update the title</button>
                {//Conditional rendering with use of tertiary operator
                    counter < 1 ?
                        <button className={"cart-add"} onClick={increaseCounterByOne} >
                            <span>Add to cart with prices</span>
                            <img src={AddToCartIcon} alt = " Cart icon" width="20" height="20" />
                        </button>
                        :
                        <div className={"cart-addon"}>
                            <button onClick={decreaseCounterByOne}><span>-</span></button>
                            <span className={"counter"}>{counter}</span>
                            <button onClick={increaseCounterByOne}><span>+</span></button>
                        </div>
                }
            </div>
            {showModal && //conditional display if modal
                <Modal onClose={handleModal} >
                    <div className="item-card__modal">
                        <div className="img-wrap">
                            <img className={"img-fluid"} src={`/assets/${data.thumbnail}`} alt={data.title} />
                        </div>
                        <div className="meta">
                            <h3>{data.title}</h3>
                            <div className={"pricing"}>
                                <span>{data.discountedPrice}</span>
                                <small >
                                    <strike>{data.price}</strike>
                                </small>
                            </div>
                            <p>{data.description}</p>
                        </div>
                    </div>
                    {//Conditional rendering with use of tertiary operator
                        counter < 1 ? //Conditional displaying the button on modal
                        <button className={"cart-add card-add__modal"} onClick={increaseCounterByOne} >
                            <span>Add to cart with prices</span>
                            <img src={AddToCartIcon} alt = " Cart icon" width="20" height="20" />
                        </button>
                        :
                        <div className={"cart-addon card-addon__modal"}>
                            <button onClick={decreaseCounterByOne}><span>-</span></button>
                            <span className={"counter"}>{counter}</span>
                            <button onClick={increaseCounterByOne}><span>+</span></button>
                        </div>
                    }

                </Modal>
            }
        </Fragment>
    );
}

export default ListItem;