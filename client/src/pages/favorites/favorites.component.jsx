import React, { Fragment, useEffect } from 'react';

import Header from '../../components/header/header.component';

import { connect } from 'react-redux';
import { getFavorites } from '../../redux/user/user-actions';

import './favorites.styles.scss';

const Favorites = ({ getFavorites, favorites }) => {
    useEffect(() => {
       getFavorites(); 
    }, []);

    return (
        <Fragment>
            <Header />
            <div>
            {
                favorites.favorites ? (
                    favorites.favorites.map((favorite, i) => (
                        <p key={i}>{favorite.name}</p>
                    ))
                ) : (
                    <span className='empty-message'>Nenhum favorito</span>
                )
            }
            </div>
        </Fragment>
    )
}

const mapStateToProps = (state) => ({
    favorites: state.user.favorites
});

export default connect(mapStateToProps ,{ getFavorites })(Favorites);