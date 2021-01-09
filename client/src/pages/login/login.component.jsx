import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { login } from '../../redux/user/user-actions';

import CustomButtom from '../../components/custom-button/custom-button.component';

import './login.styles.scss';

const Login = ({ login, isAuthenticated }) => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        login(email, password);
      };

    if (isAuthenticated) {
        return <Redirect to="/" />;
    }

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

                <form onSubmit={onSubmit}>
                    <div className='input'>
                        <label htmlFor="email">Email:</label>
                        <input 
                            className='input-pattern' 
                            type="text" 
                            name="email"
                            id="email" 
                            placeholder="ex: ana@gmail.com"
                            value={email}
                            onChange={onChange}
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
                            value={password}
                            onChange={onChange}
                        />
                    </div>
                    <div className='links'>
                        <span className='forgot'>Esqueci Senha</span>
                        <CustomButtom> Entrar </CustomButtom>
                    </div>
                    <p className='info'>Ainda não possui uma conta? <span style={{display:'block'}}><Link to='registrar'>Cadastre-se</Link></span></p>
                </form>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.user.isAuthenticated
}) 

export default connect(mapStateToProps, { login })(Login);