
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ItemListContainer } from './components/ItemListContainer'
import { NavBar } from './components/NavBar'
import { ItemDetailContainer } from './components/ItemDetailContainer'
import { FormContainer } from './components/Form/FormContainer'
import { CartContext } from './context/Cart/CartContext'
import { useState } from 'react'
import { CartDetail } from './components/Cart/CartDetail'

function App() {

  const [cart, setCart] = useState([])
  const [cartCount, setCartCount] = useState(0)
  /* 
  const user = "User"
  const age = 18 */

  return (
    <div>

      <CartContext.Provider value={{ cart, setCart, cartCount, setCartCount }} >
        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/products/:id' element={<ItemDetailContainer />} />
            <Route path='/Form' element={<FormContainer />} />
            <Route path='/cart' element={<CartDetail />} />
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </div>
  )
}



export default App
