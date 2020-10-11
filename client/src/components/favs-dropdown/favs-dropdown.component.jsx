import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import CartItem from '../cart-item/cart-item.component';

import { getFavorites } from '../../redux/user/user-actions';

import './favs-dropdown.styles.scss';

const FavsDropdown = ({ user, getFavorites }) => {

    useEffect(() => {
        //call function to upload user.favorites
        getFavorites();
    }, [getFavorites]);

    const { favorites } = user;
    return (
        <div className='fav-dropdown'>
            <div className='cart-items'>
                {
                    favorites.favorites ? (
                        favorites.favorites.map((favorite, i) => (
                            <CartItem key={i} item={favorite} />
                        ))
                    ) : (
                        <span className='empty-message'>Nenhum favorito</span>
                    )
                }
            </div>
            <Link to='/favoritos' className='btn-checkout'>Ver Favoritos</Link>
        </div>
    )
}


const mapStateToProps = (state) => ({
    user: state.user
});


export default connect(mapStateToProps, { getFavorites })(FavsDropdown);