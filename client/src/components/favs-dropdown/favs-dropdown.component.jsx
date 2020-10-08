import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getFavorites } from '../../redux/user/user-actions';

import './favs-dropdown.styles.scss';

const FavsDropdown = ({ user, getFavorites }) => {

    useEffect(() => {
        //call function to upload user.favorites
        getFavorites();
    }, []);

    const { favorites } = user;
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
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
        </div>
    )
}


const mapStateToProps = (state) => ({
    user: state.user
});


export default connect(mapStateToProps, { getFavorites })(FavsDropdown);