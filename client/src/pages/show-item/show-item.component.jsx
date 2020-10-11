import React, { Fragment } from 'react';

import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';

import './show-item.styles.scss';

const ShowItem = () => {
    return (
        <Fragment>
            <Header />
            <div className='show-item'>
                <img src="https://images.unsplash.com/photo-1601294468283-a757cbd09a28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80" width='450' alt=""/>
                <div className='info'>
                    <h3>Calça Jeans</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, suscipit ab fugit debitis numquam doloremque! Ea, neque reiciendis reprehenderit quaerat explicabo odit vitae molestiae optio accusantium tempore soluta error magnam.</p>
                    <div className='features'>
                        <p> <strong>Quantidade: </strong> 5</p>
                        <p> <strong>Tamanho: </strong> GG </p>
                        <p> <strong>Cor: </strong> Azul </p>
                    </div>
                    
                    <div style={{marginTop: '30px'}}>
                        <span style={{color: 'rgba(0, 0, 0, .5)', fontSize: '20px'}}>
                            em ate 2x
                        </span>
                        <span style={{display: 'block', fontWeight: 'bold', fontSize: '24px'}}>
                            {`R$ ${28}`}
                        </span>
                    </div>
                    
                    <button className='btn'>Adicionar no Carrinho</button>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default ShowItem;