import React, { Fragment, useEffect } from 'react';

import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import Card from '../../components/card/card.component';

import { connect } from 'react-redux';
import { getFavorites } from '../../redux/user/user-actions';

import './favorites.styles.scss';

const Favorites = ({ getFavorites, user }) => {
    useEffect(() => {
       getFavorites();
    }, [getFavorites]);

    const { favorites } = user;

    return (
        <Fragment>
            <Header />
            <div className='favorites'>
                <p className='page-title'>Salvos Como Favoritos</p>
                <div className='favorites-container'>
                {
                    favorites.favorites ? (
                        favorites.favorites.map((favorite, i) => (
                            <Card key={i} product={favorite} />
                        ))
                    ) : (
                        <span className='empty-message'>Nenhum favorito</span>
                    )
                }
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

const mapStateToProps = (state) => ({
    user: state.user
});

export default connect(mapStateToProps ,{ getFavorites })(Favorites);