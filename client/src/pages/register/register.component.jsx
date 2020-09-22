import React from 'react';
import { Link } from 'react-router-dom';

import './register.styles.scss';

const Register = () => {
    return (
        <div className='register-page'>
            <div className='photo'>
                <div className='text'>
                    <h1>NeoStore</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique quam harum vitae. Eum mollitia ad provident corporis adipisci ab? Qui temporibus rerum ex! Odit maxime dolorem magni cum, culpa doloribus!</p>
                </div>
            </div>
            <div className='form'>
                <div style={{textAlign: 'left', marginLeft: '10%'}}>
                    <p className='title'>Cadastro</p>
                </div>

                <form>
                    <div className='input'>
                        <label htmlFor="name">Nome Completo:</label>
                        <input 
                        className='input-pattern' 
                        type="text" 
                        name="name" 

                        id="name" 
                        placeholder="ex: Pedro Guilherme da Silva"/>
                    </div>
                    <div className='input'>
                        <label htmlFor="email">Email:</label>
                        <input 
                        className='input-pattern' 
                        type="text" 
                        name="email" 
                        id="email" 
                        placeholder="(DDD) 997094523"/>
                    </div>
                    <div className='input'>
                        <label htmlFor="email">Telefone:</label>
                        <input 
                        className='input-pattern' 
                        type="text" 
                        name="email" 
                        id="email" 
                        placeholder="ex: ana@gmail.com"/>
                    </div>
                    <div className='input'>
                        <label htmlFor="password">Senha:</label>
                        <input 
                        className='input-pattern' 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="Sua senha de cadastro"/>
                    </div>
                    <div className='input'>
                        <label htmlFor="confirmPassword">Confirmar Senha:</label>
                        <input 
                        className='input-pattern' 
                        type="password" 
                        name="confirmPassword" 
                        id="confirmPassword" 
                        placeholder="Sua senha de cadastro"/>
                    </div>
                    <div>
                        <button className='btn-login mt-30'>Cadastrar</button>
                        <p className='info'>Já tem uma conta? <Link to='/login'>Entrar</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Register;