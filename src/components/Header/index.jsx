import React from 'react';
import logo from '../../assets/logoQTurmaFGA.png';
import estilos from './header.module.css'

const Header = () => {
    return (
        <header>
            <div className={estilos.logoEmpresa}><img src={logo} alt="Logo do QTURMA" /></div>
        </header>
    );
};

export default Header;