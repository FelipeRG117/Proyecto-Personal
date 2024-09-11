import { useState } from "react"
import { useCart } from "../context/Cart/useCart"

export const ItemDetail = ({ item }) => {
    //console.log("ESTOOOO ES ITEEEM ", item)
    const [count, setCount] = useState(1)
    const { AddToCart, handleCount } = useCart()

    const handleAdd = () => {
        try {

            count < item.stock && setCount(count + 1)
        } catch (error) {
            console.log("Hubo un error en restar ", error)
        }
    }

    const handleSubtract = () => {
        try {
            count > 1 && setCount(count - 1)
        } catch (error) {
            console.log("Hubo un error en restar", error)
        }
    }

    const handleAddToCart = (item, count) => {
        try {
            const product = { ...item, count }
            AddToCart(product)
            //aqui luego vamos a crear la funcion para que acada que se mande al cart se reste la cantidad con el count de producto 
            //este en teoria es el count que se pasa del producto
            handleCount(count)



        } catch (error) {
            console.log("Hubo un error en restar", error)
        }
    }


    try {
        return (
            <div>
                <h1>{item.title} </h1>
                <img src={item.image} alt={item.title} />
                <h2>Description: {item.description} </h2>
                <h2>Price: {item.price} </h2>
                <h2>Stock: {item.stock} </h2>
                <button onClick={handleSubtract} >-</button>
                <h3>{count} </h3>
                <button onClick={handleAdd}>+</button>
                <button onClick={() => handleAddToCart(item, count)} >Add To Cart</button>

            </div>
        )
    } catch (error) {
        console.log("Hubo un error en ItemDetail", error)
    }
}

