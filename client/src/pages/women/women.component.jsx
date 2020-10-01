import React, { useEffect, Fragment } from 'react';

import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import Card from '../../components/card/card.component';

import { connect } from 'react-redux';
import { getProductsByGroup } from '../../redux/product/product.actions';

import './women.styles.scss';

const Women = ({ getProductsByGroup, women }) => {

    useEffect(() => {
        getProductsByGroup('mulher', 'GET_PRODUCTS_FOR_WOMEN');
    }, []);

    return (
        <Fragment>
            <Header />
            <div className='women'>
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
            <Footer />
        </Fragment>
    )
}

const mapStateToProps = (state) => ({
    women: state.products.women
  });

export default connect( mapStateToProps, { getProductsByGroup })(Women);