import React from 'react';
import { connect } from 'react-redux';

import './favs-dropdown.styles.scss';

const FavsDropdown = ({ user }) => {
    const { favorites } = user;
    console.log(user);
    console.log(favorites);
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    favorites.length ? (
                        favorites.map(favorite => (
                            <p key={favorite._id}>{favorite._id}</p>
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
    user: state.user.user
  });


export default connect(mapStateToProps)(FavsDropdown);