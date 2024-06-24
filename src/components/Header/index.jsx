import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logoQTurmaFGA.png';
import estilos from './header.module.css';
import { FaHome } from "react-icons/fa";

const Header = () => {
  const location = useLocation();

  return (
    <header className={estilos.header}> 
      {location.pathname !== '/' && (
        <Link to="/" className={estilos.homeLink}>
          <FaHome className={estilos.homeIcon} />
        </Link>
      )}
      <Link to="/" className={estilos.logoQTURMA}>
        <img src={logo} alt="Logo do QTURMA" />
      </Link>
    </header>
  );
};

export default Header;
