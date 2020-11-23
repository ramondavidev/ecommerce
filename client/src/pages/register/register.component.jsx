import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { register } from '../../redux/user/user-actions';

import CustomButtom from '../../components/custom-button/custom-button.component';

import './register.styles.scss';

const Register = ({ register, isAuthenticated }) => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });

    const { name, email, phone, password, confirmPassword } = formData;

    const onChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    }

    const onSubmit = async(e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('As senhas não são iguais!');
        } else {
            register({ name, email, phone, password });
        }
    }

    if (isAuthenticated) {
        return <Redirect to="/" />;
    }

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

                <form onSubmit={onSubmit}>
                    <div className='input'>
                        <label htmlFor="name">Nome Completo:</label>
                        <input 
                        className='input-pattern' 
                        type="text" 
                        name="name" 
                        id="name" 
                        placeholder="ex: Pedro Guilherme da Silva"
                        value={name}
                        onChange={onChange}
                        required
                    />
                    </div>
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
                        required
                    />
                    </div>
                    <div className='input'>
                        <label htmlFor="email">Telefone:</label>
                        <input 
                        className='input-pattern' 
                        type="text" 
                        name="phone" 
                        id="email" 
                        placeholder="(DDD) 997094523"
                        value={phone}
                        onChange={onChange}
                        required
                    />
                    </div>
                    <div className='input'>
                        <label htmlFor="password">Senha:</label>
                        <input 
                        className='input-pattern' 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="Sua senha de cadastro"
                        value={password}
                        onChange={onChange}
                        required
                    />
                    </div>
                    <div className='input'>
                        <label htmlFor="confirmPassword">Confirmar Senha:</label>
                        <input 
                        className='input-pattern' 
                        type="password" 
                        name="confirmPassword" 
                        id="confirmPassword" 
                        placeholder="Sua senha de cadastro"
                        value={confirmPassword}
                        onChange={onChange}
                        required
                    />
                    </div>
                    <div>
                        <CustomButtom style={{marginTop: '15px'}}> Cadastrar </CustomButtom>
                        <p className='info'>Já tem uma conta? <Link to='/login'>Entrar</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.user.isAuthenticated
});

export default connect(mapStateToProps, { register } )(Register);