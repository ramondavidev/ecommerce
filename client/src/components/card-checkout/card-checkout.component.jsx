import React from 'react';

import './card-checkout.styles.scss';

const CardCheckout = ({ item }) => {
    const { image, quantityBuy, price, name } = item;
    return (
        <div className='card-checkout'>

            <div style={{display: 'flex'}}>
                <img src={image} width='150px' alt=""/>
                <div className='info'>
                    <p style={{fontSize: '24px'}} className='bold'>{name}</p>
                    <p className='greyColor'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores sit, dignissimos.</p>
                </div>
            </div>

            <div style={{flexBasis: '200px'}}>
                <p style={{fontSize: '18px'}} className='greyColor'>Quantidade</p>
                <p style={{fontSize: '18px'}} className='bold'>{quantityBuy}</p>
            </div>

            <div style={{flexBasis: '200px'}}>
                <p style={{fontSize: '18px'}} className='greyColor'>Total</p>
                <p style={{fontSize: '18px'}} className='bold'>R$ {quantityBuy * price}</p>
            </div>

            <div style={{flexBasis: '200px'}}>
                <p><i className="far fa-trash-alt fa-lg remove-icon"></i></p>
            </div>

        </div>
    )
}

export default CardCheckout;