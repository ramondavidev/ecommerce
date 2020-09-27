import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';

const Header = () => {
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
                    <i class="far fa-heart icon-heart"></i>
                    <i class="fas fa-cart-arrow-down icon-cart"></i>
                    <i class="far fa-user icon-profile"></i>
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

export default Header;