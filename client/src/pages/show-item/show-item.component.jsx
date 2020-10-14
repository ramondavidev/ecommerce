import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';

import { getProductById } from '../../redux/product/product.actions';

import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';

import './show-item.styles.scss';

const ShowItem = ({ match ,getProductById, product }) => {
    useEffect(() => {
        getProductById(match.params.id);
    }, []);

    //const { name, description, price, option, quantity } = product;

    return (
        <Fragment>
            <Header />
            {
                product ?
            <div className='show-item'>
                <img src={product.image} width='450' alt=""/>
                <div className='info'>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <div className='features'>
                        <p> <strong>Quantidade: </strong> {product.quantity}</p>
                        <p> <strong>Tamanho: </strong> GG </p>
                        <p> <strong>Cor: </strong> {product.option} </p>
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
            : <p>loading...</p>
            }
            <Footer />
        </Fragment>
    )
}

const mapStateToProps = (state) => ({
    product: state.products.product
});

export default connect(mapStateToProps, { getProductById })(ShowItem);