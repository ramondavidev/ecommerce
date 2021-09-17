import React, { useState } from 'react';

import './purchase.styles.scss';

const Purchase = ({ purchase }) => {

    const [itensBought, setItensBought] = useState(false);

    const { _id, boughtBy, date, items, totalPrice } = purchase;
    return (
        <div className='purchase'>
            <span>
                <span style={{fontWeight: '700'}}>Número do pedido: </span> {_id}
            </span>
            <span>
                <span style={{fontWeight: '700'}}>Data:</span> {date}
            </span>
            <span>
                <span style={{fontWeight: '700'}}>Valor:</span> {totalPrice} R$
            </span>

            <span>
                <button className='btn-showItens'><i class="far fa-arrow-alt-circle-right fa-2x"></i></button>
            </span>
        </div>
    )
}

export default Purchase;