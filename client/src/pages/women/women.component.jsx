import React, { useEffect } from 'react';

import Header from '../../components/header/header.component';
import Card from '../../components/card/card.component';

import { connect } from 'react-redux';
import { getProductsByGroup } from '../../redux/product/product.actions';

import './women.styles.scss';

const Women = ({ getProductsByGroup, products }) => {
    console.log(products);

    useEffect(() => {
        getProductsByGroup('mulher');
    }, []);

    return (
        <div className='women'>
            <Header />
            <div className='card-container'>
            {
                products ? 
                    products.map(product => (
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
    products: state.products.products
  });

export default connect( mapStateToProps, { getProductsByGroup })(Women);