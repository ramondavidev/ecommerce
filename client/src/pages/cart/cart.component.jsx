import React, { Fragment } from 'react';

import { connect } from 'react-redux';

import { addItemToCart, removeItemFromCart, clearItemFromCart } from '../../redux/cart/cart.actions';

import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import CardCheckout from '../../components/card-checkout/card-checkout.component';

import './cart.styles.scss';



const CartPage = ({ cart, removeItemFromCart, addItemToCart, clearItemFromCart }) => {
    const { cartItems } = cart;

    const selectTotal = (cart) => {
        const total = cart.reduce(
            (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantityBuy * cartItem.price,
            0
        )
        return total;
    }
    
    return (
        <Fragment>
            <Header />
            <div className='cart-page' style={{minHeight: '300px'}}>
                {
                    cartItems.length ? (
                        cartItems.map(cartItem => (
                            <CardCheckout 
                                key={cartItem._id} 
                                item={cartItem} 
                                removeItemFromCart={removeItemFromCart}
                                addItemToCart={addItemToCart} 
                                clearItemFromCart={clearItemFromCart}
                                items={cartItems}  
                            />
                        ))
                    ) : (
                        <span className='empty-message'>Seu carrinho está vazio</span>
                    )
                }
                {
                    cartItems.length && 
                        <div className='confirm-purchase'>
                            <div>
                                <p><span style={{color: 'rgba(0, 0, 0, .5)', marginRight: '20px'}}>Total</span><span style={{fontWeight: 'bold'}}>R$ {cartItems? selectTotal(cartItems) : 0}</span></p>
                            </div>
                            <button className='btn'>Confirmar Compra</button>
                        </div>
                }
            </div>
            <Footer />
        </Fragment>
    )
}

const mapStateToProps = (state) => ({
    cart: state.cart
});

export default connect(mapStateToProps, { removeItemFromCart, addItemToCart, clearItemFromCart })(CartPage);