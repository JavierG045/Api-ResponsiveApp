import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="navbar">
            <div className="left">
                <Link to="/home">
                    <img
                        src="imagenes/LOGO COMBI.png"
                        alt="Logo"
                        className="logo logo-img"
                    />
                </Link>
            </div>
            <div className="center">
                <p className="navbar-text">"Familia Unida por el Volleyball"</p>
            </div>
            <div className="right">
                <button className="menu-toggle" onClick={toggleMenu}>
                    ☰
                </button>
                <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <Link to="/search" className="nav-link">Buscar Productos</Link>
                    <Link to="/voley-pics" className="nav-link">Resultados</Link>
                    <Link to="/volleyball-news" className="nav-link">Combi News</Link>
                    <Link to="/home" className="nav-link">Inicio</Link>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;
