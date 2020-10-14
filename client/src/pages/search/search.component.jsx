import React, { Fragment, useEffect } from 'react';

import { connect } from 'react-redux';

import { getProductByName } from '../../redux/product/product.actions';

import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';

import './search.styles.scss';

const Search = ({ match, producs, getProductByName }) => {

    useEffect(() => {
        getProductByName(match.params.valor);
    }, [match.params.valor]);

    console.log(producs);
    return (
        <Fragment>
            <Header />
            <div className='search'>
                Footer
            </div>
            <Footer />
        </Fragment>
    )
}

const mapStateToProps = (state) => ({
    producs: state.products.products
});

export default connect(mapStateToProps, { getProductByName })(Search);