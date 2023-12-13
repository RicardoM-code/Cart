import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'
import formatCurrency from '../../utils/formatCurrency'
import CartItem from '../CartItem/CartItem'
import './Cart.css'

function Cart() {
    const {cartItems, cartVisible} = useContext(AppContext)

    const totalPrice = cartItems.reduce((acc, item) => item.price + acc, 0)

  return (
    <section className={`cart ${cartVisible ? 'cart_active' : ''}`}>
        <div className='cart_items'>
            {cartItems.map((cartItems) =><CartItem key={cartItems.id} data={cartItems} />)}
        </div>
        <div className='cart_resume'>{formatCurrency(totalPrice)}</div>
    </section>
  )

}

export default Cart