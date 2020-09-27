import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { logout } from '../../redux/user/user-actions';

import './header.styles.scss';

const Header = ({ logout }) => {

    const [showFavs, setShowFavs] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [userOptions, setUserOptions] = useState(false);

    const clickUserIcon = () => {
        setShowFavs(false);
        setShowCart(false);
        setUserOptions(!userOptions);
    }

    const clickCartIcon = () => {
        setShowFavs(false);
        setShowCart(!showCart);
        setUserOptions(false);
    }

    const clickFavIcon = () => {
        setShowFavs(!showFavs);
        setShowCart(false);
        setUserOptions(false);
    }

    return (
        <div className='header'>

            <div className='flex-container-social-network'>
                <Link to='/' className='flex-item-social-network'>
                    Contato
                </Link>
                <a href='/#' className='flex-item-social-network'>
                    Facebook
                </a>
                <a href='/#' className='flex-item-social-network'>
                    Instagram  
                </a>
                <a href='/#' className='flex-item-social-network' style={{marginRight: '70px'}}>
                    Twitter
                </a>
            </div>

            <div className='flex-container-actions'>  
                <p style={{fontSize: '24px'}}><span style={{display: 'block', fontWeight: '700'}}>Neo</span>Store</p>
                <input type="text" className='input-pattern' placeholder='Busque por item'/>
                <div className='icons'>
                    <div>
                        <button className={showFavs && 'grow'} onClick={() => clickFavIcon()}>
                            <i className="far fa-heart icon-heart"></i>
                        </button>
                        {showFavs && <div className='fav-options'>Hey</div>}
                    </div>

                    <div>
                        <button className={showCart && 'grow'} onClick={() => clickCartIcon()}>
                            <i className="fas fa-cart-arrow-down icon-cart"></i>
                        </button>
                        {showCart && <div className='cart-options'>Hey</div>}
                    </div>

                    <div>
                        <button className={userOptions && 'grow'} onClick={() => clickUserIcon()}>
                            <i className="far fa-user icon-profile"></i>
                        </button>
                        {
                            userOptions && 
                            <div className='user-options'>
                                <a className='logout-btn' onClick={() => {logout()}} >
                                    <i className='fas fa-sign-out-alt fa-lg text-danger' />{' '}
                                    <div className='hide-sm'>Sair</div>
                                </a>
                            </div>
                        }
                    </div>
                </div>
            </div>

            <div className='flex-container-menu'>
                <Link to='/moda-feminina' className='flex-item-menu'>
                    Moda feminina
                </Link>
                <Link to='/moda-masculina' className='flex-item-menu'>
                    Moda masculina
                </Link>
                <Link to='/infantil' className='flex-item-menu'>
                    Moda infantil
                </Link>
                <Link to='/calcados' className='flex-item-menu'>
                    Calçados
                </Link>
                <Link to='/roupas-inverno' className='flex-item-menu'>
                    Roupas de inverno
                </Link>
                <Link to='/roupas-verao' className='flex-item-menu'>
                    Roupas de verão
                </Link>
            </div>

        </div>
    )
}

export default connect(null, { logout })(Header);