import AddToCartIcon from "../assets/icons/shopping-cart.svg"

const ListItem = ({data}) => {
    
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
            <button className={"cart-add"}>
                <span>Add to cart with prices</span>
                <img src={AddToCartIcon} alt = " Cart icon" width="20" height="20"/>
            </button>
        </div>
    );
}

export default ListItem;