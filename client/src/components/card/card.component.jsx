import React from 'react';
import { Link } from 'react-router-dom';

import { addItemToCart } from '../../redux/cart/cart.actions';
import { addFavorite } from '../../redux/user/user-actions';

import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';

import './card.styles.scss';

const Card = ({ product, cart, addItemToCart, addFavorite }) => {
    

    const { name, image, price, description, _id } = product;
    return (
        <div className='card'>
            <div>
                <img src={image} alt=""/>
                <i onClick={() => addFavorite(_id)} className="far fa-heart fav-icon"></i>
            </div>
            <div className='card-info'>
                <Link className='title' to={`/produto/${_id}`} >{name}</Link>
                <p className='info'>{description.substring(0, 60)}</p>
                <div className='card-bottom'>
                    <div>
                        <p><span style={{color: 'rgba(0, 0, 0, .5)'}}>em ate 2x</span><span style={{display: 'block', fontWeight: 'bold'}}>{`R$ ${price}`}</span></p>
                    </div>
                    <CustomButton onClick={() => addItemToCart(cart.cartItems, product)}> Adicionar no Carrinho </CustomButton>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cart: state.cart
});

export default connect(mapStateToProps, {addItemToCart, addFavorite})(Card);
