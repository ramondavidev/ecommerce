import React, { useEffect, Fragment } from 'react';

import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import Card from '../../components/card/card.component';
import Spinner from '../../components/spinner/spinner.component';

import { connect } from 'react-redux';
import { getProductsByGroup } from '../../redux/product/product.actions';

import './children.styles.scss';

const Children = ({ getProductsByGroup, children }) => {

    useEffect(() => {
        getProductsByGroup('crianca', 'GET_PRODUCTS_FOR_CHILDREN');
    }, [getProductsByGroup]);

    return (
        <Fragment>
            <Header />
            <div className='children'>
                <div className='card-container'>
                {
                    children && children.length > 0 ? 
                        children.map(product => (
                            <Card key={product._id} product={product} />
                        ))
                    : 
                    <Spinner />
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