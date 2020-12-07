import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
//import axios from 'axios';
import api from '../../utils/api';

const StripeCheckoutButton = ({ price, cart, clearCart }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HfvQADabFqdelT4L4K5vTYaPMwFHTkDHdkco015AUntgRCWlovBzlYjahCSVpKM9PwOzcWUZ5qXNLRSBy3v4dUI00OoPme35G';

    const clerAllItems = () => {
        clearCart();
    }
    
    const onToken = async token => {

        try {

            const data = {
                amount: priceForStripe,
                token,
                cart
            }
            await api.post('/payment', data);
            await clerAllItems();
            //send user to thank you page
            alert('Pagamento realizado com sucesso!');
        } catch (error) {
            console.log(error);
            alert('Houve um problema ao realizar o pagamento, reveja os dados do cartão e o limite disponível!');
        }

        /*axios({
            url: 'http://localhost:5000/api/payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token,
                cart
            }
        }).then(response => {
            console.log(response);
            //add user's purchase
            alert('Pagamento realizado com sucesso!');
        }).catch(error => {
            console.log(error);
            alert('Houve um problema ao realizar o pagamento, reveja os dados do cartão e o limite disponível!');
        });*/
    };

    return (
        <StripeCheckout
            label="Pague Agora"
            name="Neo Store"
            billingAddress
            description={`Preço total R$${price}`}
            currency="BRL"
            amount={priceForStripe}
            locale="auto"
            panelLabel='Pague Agora'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;