import React from 'react';
import { Link } from 'react-router-dom';

import './login.styles.scss';

const Login = () => {
    return (
        <div className='login-page'>
            <div className='photo'>
                <div className='text'>
                    <h1>NeoStore</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique quam harum vitae. Eum mollitia ad provident corporis adipisci ab? Qui temporibus rerum ex! Odit maxime dolorem magni cum, culpa doloribus!</p>
                </div>
            </div>
            <div className='login'>
                <p className='title'>Olá, seja bem vindo</p>

                <form>
                    <div className='input'>
                        <label htmlFor="email">Email:</label>
                        <input 
                            className='input-pattern' 
                            type="text" 
                            name="email"
                            id="email" 
                            placeholder="ex: ana@gmail.com"
                        />
                    </div>
                    <div className='input'>
                        <label htmlFor="password">Senha:</label>
                        <input 
                            className='input-pattern' 
                            type="password" 
                            name="password" 
                            id="password" 
                            placeholder="Sua senha cadastrada"
                        />
                    </div>
                    <div className='links'>
                        <a className='forgot'>Esqueci Senha</a>
                        <button className='btn-login'>Entrar</button>
                    </div>
                    <p className='info'>Ainda não possui uma conta? <Link to='registrar'>Cadastre-se</Link></p>
                </form>
            </div>
        </div>
    )
};

export default Login;