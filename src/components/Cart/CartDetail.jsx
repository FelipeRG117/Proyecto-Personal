import { useContext } from "react"
import { CartContext } from "../../context/Cart/CartContext"

export const CartDetail = () => {

    //aqui nos traeos el context  de Cart 
    const { cart, setCart } = useContext(CartContext)
    console.log("esta mierda is tyhe shit broooo", cart)
    return (
        <div>
            <h1>Este es carritoooooo</h1>
        </div>
    )
}

