import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({ item, removePrice }) => {
    const { image, quantityBuy, price, name } = item;
    return (
        <div className='cart-item'>
            <img src={image} alt='item' />
            <div className='item-details'>
                <span className='name'>{name}</span>
                {
                    removePrice &&
                    <span className='price'>
                        {quantityBuy} x ${price}
                    </span>
                }
            </div>
        </div>
    )
}

export default CartItem;