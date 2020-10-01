import React, { useEffect } from 'react';

import Header from '../../components/header/header.component';
import Card from '../../components/card/card.component';

import { connect } from 'react-redux';
import { getProductsByGroup } from '../../redux/product/product.actions';

import './children.styles.scss';

const Children = ({ getProductsByGroup, children }) => {

    useEffect(() => {
        getProductsByGroup('crianca', 'GET_PRODUCTS_FOR_CHILDREN');
    }, []);

    return (
        <div className='children'>
            <Header />
            <div className='card-container'>
            {
                children ? 
                    children.map(product => (
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
    children: state.products.children
  });

export default connect( mapStateToProps, { getProductsByGroup })(Children);