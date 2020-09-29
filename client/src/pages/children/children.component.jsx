import React, { useEffect } from 'react';

import Header from '../../components/header/header.component';
import Card from '../../components/card/card.component';

import { connect } from 'react-redux';
import { getProductsByGroup } from '../../redux/product/product.actions';

import './children.styles.scss';

const Children = ({ getProductsByGroup, products }) => {

    useEffect(() => {
        getProductsByGroup('crianca');
    }, []);

    return (
        <div className='children'>
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

export default connect( mapStateToProps, { getProductsByGroup })(Children);