import React from 'react';

import './card.styles.scss';

const Card = () => {
    return (
        <div className='card'>
            <img src="https://images.unsplash.com/photo-1485218126466-34e6392ec754?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80" alt=""/>
            <div className='card-info'>
                <p className='title'>Camisa Polo</p>
                <p className='info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, sapiente quis! Asperna.</p>
                <div className='card-bottom'>
                    <div>
                        <p><span style={{color: 'rgba(0, 0, 0, .5)'}}>em ate 2x</span><span style={{display: 'block', fontWeight: 'bold'}}>R$ 88,90</span></p>
                    </div>
                    <button className='btn'>Comprar</button>
                </div>
            </div>
        </div>
    )
}

export default Card;