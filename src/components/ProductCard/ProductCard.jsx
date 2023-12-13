
import React, { useContext } from 'react';
import { FaCartPlus } from "react-icons/fa";
import AppContext from '../../context/AppContext';
import formatCurrency from '../../utils/formatCurrency';
import './ProductCard.css';

function ProductCard({data}) {
    const { title, thumbnail, price} = data

    const {cartItems, setCartItems} = useContext(AppContext)

    const handleAddCart = () => setCartItems([...cartItems, data])

  return (
    <section className='product_card'>
        <img src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
        alt="product" className='card_image' />
        <div className='card_infos'>
            <h2 className='card_price'>{formatCurrency(price)}</h2>
            <h2 className='card_title'>{title}</h2>
        </div>

        <button type='button' className='button_add_cart' onClick={handleAddCart}><FaCartPlus /></button>
    </section>
  )
}

export default ProductCard
