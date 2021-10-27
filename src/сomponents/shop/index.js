import React, {useState} from "react"
import AddItem from "./AddItem";
import "./index.css"
import Item from "./Item";

const Shop = () => {
    const [ items, setItems ] = useState([])

    //setItem(fwfwfw)
    //setItem((prev) => prev.filter((...)))

    //[].map((value) => )
    //{} -> Object.keys(object) -> [key, key, key].map((val) => )

    //{}

    return (
        <div className={"shop"}>
            <h1>Shop</h1>
            <AddItem setState={setItems} items={items}/>
            <div className={"items"}>
                {items?.map((item) => (
                   <Item item={item} setState={setItems}/>
                ))}
            </div>
        </div>
    )
}

export default Shop
