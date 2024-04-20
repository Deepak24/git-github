import ListItem from "../ListItem";
const Products = () => {
    return(
        <div className={"product-list"}>
            <div className={"product-list--wrapper"}>
                <ListItem data= {{
                discountedPrice : 340,
                price : 450,
                title : "Title of the item 1",
                thumbnail: "200x150.png"
                }} />
                <ListItem data= {{
                discountedPrice : 100,
                price : 80,
                title : "Title of the item 2",
                thumbnail: "200x150.png"
                }} />
            </div>
        </div>
        
    )
}

export default Products;