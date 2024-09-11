import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext'

const CarWidget = () => {
  const { cartCount } = useContext(CartContext)
  return (
    <div>
      <Link className="navbar-item" to={"/cart"}>Cart
        <span>{cartCount}</span>{/* //este count llega desde cartContext donde se sumaran los count que lllegan desde itemmDetailCOntainer  */}
      </Link>
    </div>
  )
}

export default CarWidget