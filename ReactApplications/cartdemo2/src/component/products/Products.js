/**
 * Desription : We can maintain states using useState hook or we can remove
 *              Passing parameters or data from child to parent and parent to child component
 */
import ListItem from "../ListItem1"
import React, {useState, useEffect} from "react";
import axios from "axios";
import Loader from "../UI/Loader1";

const Products = () => {
    
    const [item, setItems] = useState([]);
    const [loader, setLoader] = useState(true);
    //We are getting callback hell condition here - We have replaced it with chaining process
    useEffect(() => {
        // fetch('https://reactdemo-cfbb9-default-rtdb.firebaseio.com/items.json')
        // .then(response => response.json())
        // .then(data => {
        //     console.log(data);
        // })
        // .catch((err) => console.log(err));

        //We are giving the network call and it's side effect in react
        //We don't need to do more process and axios doing most of the procsses
        //We can use async-await to get and process the API response
        async function fetchItems(){
            const response = await axios.get('https://reactdemo-cfbb9-default-rtdb.firebaseio.com/items.json');
            try {
                const data = response.data;
                const transformData = data.map((item, index) => {
                    return {
                        ...item,
                        id : index
                    }
                });
                console.log(transformData);
                setItems(transformData);    
            }
            catch(error){
                console.log(error);
                alert("Error Message" + error);
            }
            finally{
                setLoader(false);
            }
        }
        fetchItems();//Give call to async function
       
    }, []);

    //Update the database title using axios package and it's methods
    const updateItemTitle = async (itemId) => {
        try{
            let title = "Update Title #Item-"+itemId;
            await axios.patch(`https://reactdemo-cfbb9-default-rtdb.firebaseio.com/items/${itemId}.json`, {
                title: "Muesli, Pack of 2 - Updated 1"
            });
            let data = [...item];
            let index = data.findIndex(e => e.id === itemId);
            data[index]['title'] = title;

            setItems(data);

        }
        catch(error) {
            console.log("Error while updating the data");
            console.log(error);
        }
    }

    return(
        <>
            <div className={"product-wrapper"}>
                <div>
                    <div >
                        <div className={"product-list"}>
                            <div className={"product-list--wrapper"}>
                                {
                                    item.map((item) => {
                                        console.log(item);
                                        return (//Pass function as props to component
                                            <ListItem key={item.id} data={item} updateItemTitle = {updateItemTitle} />
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {true && <Loader/> }
        </>     
    )
}

export default Products;