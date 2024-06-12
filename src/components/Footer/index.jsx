import React from 'react';
import estilos from './footer.module.css'

const Footer = () => {
    return (
        <footer className={estilos.footerPagina}>
            <p> Todos os direitos reservados <a href="#">&copy; 2024 QTURMA</a> </p>
        </footer>
    );
};

export default Footer;