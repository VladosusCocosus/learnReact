import React, {useState} from "react";
import {uid} from "react-uid";

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const AddItem = ({setState, items}) => {
    const [itemInfo, setInfo] = useState({id: uid(getRandomInt(10000))})

    const handleChange = (key, value) => {
        setInfo((prev) => ({...prev, [key]: value}))
    }

    const AddItem = () => {
        const copy = [...items]
        copy.push(itemInfo)
        setState(copy)
        setInfo({id: uid(getRandomInt(10000))})
    }

    const available = itemInfo.name && itemInfo.price && itemInfo.description

    return (
        <div>
            <input
                type="text"
                value={itemInfo.name || ""}
                placeholder={"Name"}
                onChange={(e) =>
                    handleChange("name", e.target.value)}
            />
            <input
                type="text"
                placeholder={"Price"}
                value={itemInfo.price || ""}
                onChange={(e) =>
                    handleChange("price", e.target.value)}
            />
            <input
                type={"text"}
                placeholder={"Description"}
                value={itemInfo.description}
                onChange={(e) =>
                    handleChange("description", e.target.value)}
            />
            <button onClick={() => AddItem()} disabled={!available}>
                Save
            </button>
        </div>
    )
}

export default AddItem