import React from 'react'
import './nav.css'

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
                <img src="img/logoEBA.jpg" alt="" id="EBA" width="80" />
                <span className="navbar-logo_name" href="#intro">Elo Boost Academy</span>
            </a>
            <button className="navbar-toggler" 
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#intro">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#section1">Servicios</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#section2">Acerca de Nosotros</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#section3">Contactanos</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default Nav;