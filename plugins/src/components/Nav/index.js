import React from 'react'
import './nav.css'

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
                <img src="img/logoEBA.jpg" alt="" id="EBA" width="84"/>
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
                        <a className="nav-link" href="#lol">League Of Legends</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#valorant">Valorant</a>  
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#csgo">Counter Strike GO</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#tft">Team Fight Tactics</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default Nav;