import React, { useEffect, Fragment } from 'react';

import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import Card from '../../components/card/card.component';

import { connect } from 'react-redux';
import { getProductsByGroup } from '../../redux/product/product.actions';

import './children.styles.scss';

const Children = ({ getProductsByGroup, children }) => {

    useEffect(() => {
        getProductsByGroup('crianca', 'GET_PRODUCTS_FOR_CHILDREN');
    }, []);

    return (
        <Fragment>
            <Header />
            <div className='children'>
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
            <Footer />
        </Fragment>
    )
}

const mapStateToProps = (state) => ({
    children: state.products.children
  });

export default connect( mapStateToProps, { getProductsByGroup })(Children);