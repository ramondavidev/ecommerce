import React, { Fragment } from 'react';

import { connect } from 'react-redux';

import { addItemToCart, removeItemFromCart, clearItemFromCart, clearCart } from '../../redux/cart/cart.actions';

import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import CardCheckout from '../../components/card-checkout/card-checkout.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import './cart.styles.scss';



const CartPage = ({ cart, removeItemFromCart, addItemToCart, clearItemFromCart, clearCart }) => {
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
                            <CustomButton> Confirmar Compra </CustomButton>
                        </div>
                }
            <StripeCheckoutButton cart={cartItems } price={cartItems? selectTotal(cartItems) : 0} clearCart={clearCart} />
            </div>
            <Footer />
        </Fragment>
    )
}

const mapStateToProps = (state) => ({
    cart: state.cart
});

export default connect(mapStateToProps, { removeItemFromCart, addItemToCart, clearItemFromCart, clearCart })(CartPage);