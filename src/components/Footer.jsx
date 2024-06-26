import React from "react";
import "./Footer.css";

const Footer = () => {
    const handleLinkClick = (event) => {
        event.preventDefault();
    };

    return (
        <footer className="footer">
            <div className="top-content">
                <p>&copy; 2024 La Combi Sports News. Todos los derechos reservados.</p>
            </div>
            <div className="bottom-content">
                <nav className="footer-nav">
                    <a href="/privacy" onClick={handleLinkClick}>Política de Privacidad</a>
                    <a href="/terms" onClick={handleLinkClick}>Términos y Condiciones</a>
                    <a href="/contact" onClick={handleLinkClick}>Contacto</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
