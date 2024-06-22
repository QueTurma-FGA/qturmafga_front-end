import React from 'react';
import {Link } from 'react-router-dom';
import logo from '../../assets/logoQTurmaFGA.png';
import estilos from './header.module.css'

const Header = () => {
    return (
        <header> 
            <Link to={`/`} className={estilos.logoEmpresa}><img src={logo} alt="Logo do QTURMA" /></Link>
        </header>
    );
};

export default Header;