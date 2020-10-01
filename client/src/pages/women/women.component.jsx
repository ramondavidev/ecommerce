import React, { useEffect } from 'react';

import Header from '../../components/header/header.component';
import Card from '../../components/card/card.component';

import { connect } from 'react-redux';
import { getProductsByGroup } from '../../redux/product/product.actions';

import './women.styles.scss';

const Women = ({ getProductsByGroup, women }) => {

    useEffect(() => {
        getProductsByGroup('mulher', 'GET_PRODUCTS_FOR_WOMEN');
    }, []);

    return (
        <div className='women'>
            <Header />
            <div className='card-container'>
            {
                women ? 
                    women.map(product => (
                        <Card key={product._id} product={product} />
                    ))
                : 
                    <p>loading...</p>
            }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    women: state.products.women
  });

export default connect( mapStateToProps, { getProductsByGroup })(Women);