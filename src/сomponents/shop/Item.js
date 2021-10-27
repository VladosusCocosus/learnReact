import React, {useState} from "react"

const Item = ({item, setState}) => {
    const [hide, setHide] = useState(true)

    const onDelete = () => {
        setState((prev) => prev.filter((i) => i.id !== item.id))
    }

    return hide ?
        <div className={"item"} onClick={() => setHide(false)}>
            <div className={"item-first"}>
                <span>{item.name}</span>
                <span>{item.price} руб.</span>
            </div>
            <div className={"item-second"}>{item.description}</div>
        </div>
        : <div className={"item"} onClick={() => setHide(true)}>
            <button onClick={() => onDelete()}>Delete</button>
        </div>
}

export default Item