import React, { useEffect } from 'react';

import Header from '../../components/header/header.component';
import Card from '../../components/card/card.component';

import { connect } from 'react-redux';
import { getProductsByGroup } from '../../redux/product/product.actions';

import './men.styles.scss';

const Men = ({ getProductsByGroup, men }) => {

    useEffect(() => {
        getProductsByGroup('homem', 'GET_PRODUCTS_FOR_MEN');
    }, []);

    return (
        <div className='men'>
            <Header />
            <div className='card-container'>
            {
                men ? 
                    men.map(product => (
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
    men: state.products.men
  });

export default connect( mapStateToProps, { getProductsByGroup })(Men);