import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';
//import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cart }) => {
    const { cartItems } = cart;
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.length ? (
                        cartItems.map(cartItem => (
                            <CartItem key={cartItem._id} item={cartItem} removePrice={true} />
                        ))
                    ) : (
                        <span className='empty-message'>Seu carrinho está vazio</span>
                    )
                }
            </div>
            <Link to='/carrinho' className='btn-checkout'>Ver Carrinho</Link>
        </div>
    )
}


const mapStateToProps = (state) => ({
    cart: state.cart
  });


export default connect(mapStateToProps)(CartDropdown);