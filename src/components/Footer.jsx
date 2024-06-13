import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2024 La Combi Sports News. Todos los derechos reservados.</p>
                <nav className="footer-nav">
                    <a href="/privacy">Política de Privacidad</a>
                    <a href="/terms">Términos y Condiciones</a>
                    <a href="/contact">Contacto</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;