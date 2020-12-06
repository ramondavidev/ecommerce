import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HfvQADabFqdelT4L4K5vTYaPMwFHTkDHdkco015AUntgRCWlovBzlYjahCSVpKM9PwOzcWUZ5qXNLRSBy3v4dUI00OoPme35G';
    
    const onToken = token => {
        axios({
            url: 'http://localhost:5000/api/payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            console.log(response);
            alert('Pagamento realizado com sucesso!');
        }).catch(error => {
            console.log(error);
            alert('Houve um problema ao realizar o pagamento, reveja os dados do cartão e o limite disponível!');
        });
    };

    return (
        <StripeCheckout
            label="Pague Agora"
            name="Neo Store"
            billingAddress
            image=''
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