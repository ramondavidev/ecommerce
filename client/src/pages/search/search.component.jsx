import React, { Fragment, useEffect } from 'react';

import { connect } from 'react-redux';

import { getProductByName } from '../../redux/product/product.actions';

import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import Card from '../../components/card/card.component';
//import Spinner from '../../components/spinner/spinner.component';

import './search.styles.scss';

const Search = ({ match, producs, getProductByName }) => {

    useEffect(() => {
        getProductByName(match.params.valor);
    }, [getProductByName, match.params.valor]);

    console.log(producs);
    return (
        <Fragment>
            <Header />
            <div className='search'>
                {
                    producs && producs.length > 0 ? 
                    producs.map(product => (
                            <Card key={product._id} product={product} />
                        ))
                    : 
                    <h3 style={{margin: '150px 0'}}>Produto não Encontrado</h3>
                }
            </div>
            <Footer />
        </Fragment>
    )
}

const mapStateToProps = (state) => ({
    producs: state.products.products
});

export default connect(mapStateToProps, { getProductByName })(Search);