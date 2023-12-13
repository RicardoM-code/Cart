/* eslint-disable eqeqeq */
import React, { useContext } from 'react';
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import AppContext from '../../context/AppContext';
import formatCurrency from '../../utils/formatCurrency';
import './CartItem.css';

function CartItem({data}) {

    const {cartItems, setCartItems} = useContext(AppContext)
    const {id, thumbnail, title, price} = data

    const handleRemoveItem = () => {
      const updatedItems = cartItems.filter((item) => item.id != id)
      setCartItems(updatedItems)
    }

  return (
    <section className='cart_item'>
        <img src={thumbnail} alt="imagem do produto" className='cart_item_image' />
        <div className='cart_item_content'>
            <h3 className='cart_item_title'>{title}</h3>
            <h3 className='cart_item_price'>{formatCurrency(price)}</h3>

            <button type='button' className='button_remove_item' onClick={handleRemoveItem}><MdOutlineRemoveShoppingCart /></button>
        </div>
    </section>
  )
}

export default CartItem