import React, { Fragment } from 'react';

import Header from '../../components/header/header.component';

import './show-item.styles.scss';

const ShowItem = () => {
    return (
        <Fragment>
            <Header />
            <div className='show-item'>
                <img src="https://images.unsplash.com/photo-1601294468283-a757cbd09a28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80" width='450' alt=""/>
                <div className='info'>
                    <h3>Calça Jeans</h3>
                    <span>Homem</span> <span>Calça</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, suscipit ab fugit debitis numquam doloremque! Ea, neque reiciendis reprehenderit quaerat explicabo odit vitae molestiae optio accusantium tempore soluta error magnam.</p>
                    <p>quantidade</p>
                    <p>tamanho</p>
                    <p>cor</p>
                    <p>price</p>
                    <button className='btn'>Adicionar no Carrinho</button>
                </div>
            </div>
        </Fragment>
    )
}

export default ShowItem;