import React, { useContext } from 'react'
import { CiShoppingCart } from "react-icons/ci"
import AppContext from '../../context/AppContext'
import './CartButton.css'

function CartButton() {
  const {cartItems, cartVisible, setCartVisible} = useContext(AppContext)

  return (
    <button type='button' className='cart_button' onClick={() => setCartVisible(!cartVisible)}>
        <CiShoppingCart />
        {cartItems.length > 0 && <span className='cart_status'>{cartItems.length}</span>}
    </button>
  )
}

export default CartButton