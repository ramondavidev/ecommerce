import React from 'react';

import './card.styles.scss';

const Card = ({ product }) => {
    const { name, image, price, description } = product;
    return (
        <div className='card'>
            <img src={image} alt=""/>
            <div className='card-info'>
                <p className='title'>{name}</p>
                <p className='info'>{description.substring(0, 60)}</p>
                <div className='card-bottom'>
                    <div>
                        <p><span style={{color: 'rgba(0, 0, 0, .5)'}}>em ate 2x</span><span style={{display: 'block', fontWeight: 'bold'}}>{`R$ ${price}`}</span></p>
                    </div>
                    <button className='btn'>Comprar</button>
                </div>
            </div>
        </div>
    )
}

export default Card;