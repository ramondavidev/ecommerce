import React from 'react';

import './footer.styles.scss';

const Footer = () => {
    return (
        <div className='footer'>

            <div className='content'>
                <div className='flex-container-logo'>
                    <div>
                        <p className='logo'><span style={{fontWeight: 'bold'}}>Neo</span> Store</p>
                        <p>A melhor loja de roupas do interior</p>
                    </div>

                    <div>
                        <p>Siga nossas redes sociais</p>
                        <div className='social-networks'>
                            <i className="fab fa-facebook-square fa-2x fc"></i> 
                            <i className="fab fa-twitter fa-2x mx-1 tw"></i> 
                            <i className="fab fa-instagram fa-2x inst"></i></div>
                    </div>
                </div>

                <div className='flex-container-info'>
                    <div className='services'>
                        <p className='title'>Serviços</p>
                        <p className='text'>Garantia</p>
                        <p className='text'>Trocas e devoluções</p>
                        <p className='text'>Outros</p>
                    </div>
                    <div className='help'>
                        <p className='title'>Ajuda</p>
                        <p className='text'>Perguntas frequentes</p>
                        <p className='text'>Atendimento</p>
                        <p className='text'>Nosso time</p>
                    </div>
                    <div className='about'>
                        <p className='title'>Sobre</p>
                        <p className='text'>Quem somos</p>
                        <p className='text'>Lojas</p>
                        <p className='text'>Contato</p>
                    </div>
                </div>
            </div>

                <div className='copyright'>
                    <p>Neo Store 2020 - Todos os direitos reservados</p>
                </div>
        </div>
    )
}

export default Footer;