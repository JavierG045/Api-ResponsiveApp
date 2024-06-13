import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';


const links = [

    {
        name: "Resultados",
        href: "/voley-pics",
    },

    {
        name: "Combi News",
        href: "/volleyball-news",
    },

    {
        name: "Inicio",
        href: "/home",
    },
];

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="left">
                <Link to="/home">
                    <img src="imagenes/LOGO COMBI.png" alt="Logo" className="logo logo-img" />
                </Link>
            </div>
            <div className="center">
                <p className="navbar-text">"Familia Unida por el Volleyball"</p>
            </div>
            <div className="right">
                {links.map(x => (
                    <Link key={x.href} to={x.href} className="nav-link">{x.name}</Link>
                ))}
            </div>
        </div>
    );
};


export default NavBar;