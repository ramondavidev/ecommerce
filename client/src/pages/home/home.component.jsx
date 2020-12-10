import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/header/header.component';

import Card from '../../components/card/card.component';
import Footer from '../../components/footer/footer.component';

import { connect } from 'react-redux';
import { displayHome } from '../../redux/product/product.actions';

import './home.styles.scss';

const Home = ({ displayHome, products, cart }) => {

    useEffect(() => {
        displayHome();
    }, [displayHome]);

    console.log(cart);
    const { men, women, children } = products;
    return (
        <Fragment>
            <Header />
            <div className='home'>
                <div className='featured-image'>
                    <div className='info'>
                        <span style={{fontSize: '48px', fontWeight: 'bold'}}>Semana de Promoções</span>
                        <p style={{display: 'block', marginBottom: '30px'}}>Produtos com até 70% de desconto</p>
                        <Link to='/ofertas' className='button-offer'>Ver ofertas</Link>
                    </div>
                </div>
                
                <p className='seeMore'>
                    <span className='first-child'>Moda Masculina</span>
                    <Link to='roupas-masculinas' style={{textDecoration: 'none'}}><span className='second-child'>Ver mais produos</span></Link>
                </p>
                
                <div className='card-container'>
                    {
                        men ? 
                            men.map(product => (
                                <Card key={product._id} product={product} />
                            ))
                        : 
                            <p>loading...</p>
                    }
                </div>

                <div className='second-featured-image'>
                    <div className='container-image'>
                        <img src="https://images.unsplash.com/photo-1519568470290-c0c1fbfff16f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=521&q=80" style={{width: '100%'}} alt=""/>
                    </div>
                    <div className='info'>
                        <p className='title'>Moda Verão</p>
                        <p className='text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, quisquam sunt! Deleniti mollitia, ipsam doloremque accusamus nobis magni sunt maiores aperiam earum veritatis molestiae inventore quam rerum dolorum molestias voluptate.</p>
                        <button>Ir para promoção</button>
                    </div>
                </div>

                <p className='seeMore'>
                    <span className='first-child'>Moda Feminina</span>
                    <Link to='roupas-femininas' style={{textDecoration: 'none'}}><span className='second-child'>Ver mais produos</span></Link>
                </p>
                
                <div className='card-container'>
                    {
                        women ? 
                            women.map(product => (
                                <Card key={product._id} product={product} />
                            ))
                        : 
                            <p>loading...</p>
                    }
                </div>

                <p className='seeMore'>
                    <span className='first-child'>Infantil</span>
                    <Link to='roupas-infantis' style={{textDecoration: 'none'}}><span className='second-child'>Ver mais produos</span></Link>
                </p>

                <div className='card-container'>
                    {
                        children ? 
                            children.map(product => (
                                <Card key={product._id} product={product} />
                            ))
                        : 
                            <p>loading...</p>
                    }
                </div>

                <div className='links'>
                    <span className='link'>Moda Feminima</span>
                    <span className='link'>Moda Intima</span>
                    <span className='link'>Moda Infantil</span>
                    <span className='link'>Roupas de Verão</span>
                    <span className='link'>Banho</span>
                    <span className='link'>Moda Masculina</span>
                    <span className='link'>Calçados</span>
                    <span className='link'>Roupas de Inverno</span>
                    <span className='link'>Cama</span>
                    <span className='link'>Outros</span>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
};

const mapStateToProps = (state) => ({
    products: state.products.products,
    cart: state.cart
  });

export default connect( mapStateToProps, { displayHome })(Home);