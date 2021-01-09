import React from 'react';

import './card-checkout.styles.scss';

const CardCheckout = ({ item, items, removeItemFromCart, addItemToCart, clearItemFromCart }) => {
    const { image, quantityBuy, price, name } = item;
    return (
        <div className='card-checkout'>

            <div className='first-part'>
                <img src={image} width='150px' alt=""/>
                <div className='info'>
                    <p style={{fontSize: '24px'}} className='bold'>{name}</p>
                    <p className='greyColor'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores sit, dignissimos.</p>
                </div>
            </div>

            <div className='quantity'>
                <p style={{fontSize: '18px'}} className='greyColor'>Quantidade</p>
                <p style={{fontSize: '18px'}}> <span onClick={() =>removeItemFromCart(items, item)} style={{cursor: 'pointer'}}> &#10094; </span> <span className='bold'>{quantityBuy}</span> <span onClick={() => addItemToCart(items, item)} style={{cursor: 'pointer'}}> &#10095; </span></p>
            </div>

            <div className='total'>
                <p style={{fontSize: '18px'}} className='greyColor'>Total</p>
                <p style={{fontSize: '18px'}} className='bold'>R$ {quantityBuy * price}</p>
            </div>

            <div className='btn-checkout'>
                <p onClick={() =>clearItemFromCart(items, item)}><i className="far fa-trash-alt fa-lg remove-icon"></i></p>
            </div>

        </div>
    )
}

export default CardCheckout;