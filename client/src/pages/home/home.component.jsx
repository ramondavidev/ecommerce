import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/header/header.component';

import Card from '../../components/card/card.component';
import Footer from '../../components/footer/footer.component'

import './home.styles.scss';

const Home = () => {
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
                
                <p className='seeMore'><span className='first-child'>Mais vendidos da semana</span><span className='second-child'>Ver mais produos</span></p>
                
                <div className='card-container'>
                    <Card />
                    <Card />
                    <Card />
                </div>

                <div className='second-featured-image'>
                    <img src="https://images.unsplash.com/photo-1519568470290-c0c1fbfff16f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=521&q=80" alt=""/>
                    <div className='info'>
                        <p className='title'>Moda Verão</p>
                        <p className='text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, quisquam sunt! Deleniti mollitia, ipsam doloremque accusamus nobis magni sunt maiores aperiam earum veritatis molestiae inventore quam rerum dolorum molestias voluptate.</p>
                        <button>Ir para promoção</button>
                    </div>
                </div>

                <p className='seeMore'><span className='first-child'>Melhores Promoções</span><span className='second-child'>Ver mais produos</span></p>
                
                <div className='card-container'>
                    <Card />
                    <Card />
                    <Card />
                </div>

                <p className='seeMore'><span className='first-child'>Novidades</span><span className='second-child'>Ver mais produos</span></p>
                
                <div className='card-container'>
                    <Card />
                    <Card />
                    <Card />
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

            <Footer />

            </div>
        </Fragment>
    )
};

export default Home;