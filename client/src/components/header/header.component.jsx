import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { connect } from 'react-redux';
import { logout } from '../../redux/user/user-actions';

import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import FavsDropdown from '../favs-dropdown/favs-dropdown.component';

import './header.styles.scss';

const Header = ({ logout, cart }) => {
    let history = useHistory();
    console.log(cart);
    const [search, setSearch] = useState('');
    const [showFavs, setShowFavs] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [userOptions, setUserOptions] = useState(false);

    const itemCount = ( cartItems ) => {
        return (
            cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantityBuy, 0)
        )
    }

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
            </div>

            <div className='flex-container-actions'>  
                <Link to='/' className='logo'><span style={{display: 'block', fontWeight: '700'}}>Neo</span>Store</Link>
                <form className='input-pattern'>
                    <input 
                        type="text" 
                        placeholder='Busque por item'
                        onChange={e => setSearch(e.target.value) }
                    />
                    <button onClick={ () => history.push(`/pesquisa/${search.toLowerCase()}`) }></button>
                </form>
                <div className='icons'>
                    <div>
                        <button className={showFavs? 'grow' : null} onClick={() => clickFavIcon()}>
                            <i className="far fa-heart icon-heart"></i>
                        </button>
                        {showFavs &&
                        <div>
                            <FavsDropdown />
                        </div>
                        }
                    </div>

                    <div>
                        <button className={showCart? 'grow' : null} onClick={() => clickCartIcon()}>
                            <i className="fas fa-cart-arrow-down icon-cart"></i>
                            {
                                cart.cartItems.length > 0 &&
                                <div className='amount'>{itemCount(cart.cartItems)}</div>
                            }
                        </button>
                        {showCart && 
                        <div>
                            <CartDropdown cart={cart} />
                        </div>
                        }
                    </div>

                    <div>
                        <button className={userOptions? 'grow' : null} onClick={() => clickUserIcon()}>
                            <i className="far fa-user icon-profile"></i>
                        </button>
                        {
                            userOptions && 
                            <div className='user-options'>
                                <span className='user-options-btn' onClick={ () => history.push('/compras') }>
                                    Minhas compras
                                </span>
                                <hr/>
                                <span className='user-options-btn' onClick={() => {logout()}} >
                                    <i className='fas fa-sign-out-alt fa-lg text-danger' />
                                    <div style={{marginLeft: '10px'}} className='hide-sm'>Sair</div>
                                </span>
                            </div>
                        }
                    </div>
                </div>
            </div>

            <div className='flex-container-menu'>
                <Link to='/roupas-masculinas' className='flex-item-menu'>
                    Moda masculina
                </Link>
                <Link to='/roupas-femininas' className='flex-item-menu'>
                    Moda feminina
                </Link>
                <Link to='/roupas-infantis' className='flex-item-menu'>
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

const mapStateToProps = (state) => ({
    cart: state.cart
});

export default connect(mapStateToProps, { logout })(Header);