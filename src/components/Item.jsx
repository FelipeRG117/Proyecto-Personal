import { Link } from "react-router-dom"

export const Item = ({ product }) => {
    return (
        <div>
            <img src={product.image} alt={product.title} />
            <h1>{product.title} </h1>
            <h2>Description: {product.description} </h2>
            <h2>Price: {product.price} </h2>
            <h2>Stock: {product.stock} </h2>
            <Link to={`/products/${product.id}`} >Ver mas</Link>
            <hr />
        </div>

    )

}