import React from 'react';

import { addItemToCart } from '../../redux/cart/cart.actions';

import { connect } from 'react-redux';

import './card.styles.scss';

const Card = ({ product, cart, addItemToCart }) => {
    console.log(cart.cartItems);
    const { name, image, price, description } = product;
    return (
        <div className='card'>
            <div>
                <img src={image} alt=""/>
                <i className="far fa-heart fav-icon"></i>
            </div>
            <div className='card-info'>
                <p className='title'>{name}</p>
                <p className='info'>{description.substring(0, 60)}</p>
                <div className='card-bottom'>
                    <div>
                        <p><span style={{color: 'rgba(0, 0, 0, .5)'}}>em ate 2x</span><span style={{display: 'block', fontWeight: 'bold'}}>{`R$ ${price}`}</span></p>
                    </div>
                    <button className='btn' onClick={() => addItemToCart(cart.cartItems, product)}>Comprar</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cart: state.cart
});

export default connect(mapStateToProps, {addItemToCart})(Card);
