import React from 'react'
import './nav.css'

const Nav = () => {
    return (
        <div className="navbar navbar-default navbar-fixed-top" role="navigation" id="navbar">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="sr-only"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                <a className="navbar-brand scrollTo" href="#intro">Elo Boost Academy</a>
            </div>

            <div className="navbar-collapse collapse" id="navigation">

                <ul className="nav navbar-nav navbar-right">
                    <li className="active"><a href="#intro">League Of Legends</a>
                    </li>
                    <li><a href="#valorant">Valorant</a>
                    </li>
                    <li><a href="#csgo">Counter Strike G O</a>
                    </li>
                    <li><a href="#tftcontainer">Team Fight Tactics</a>
                    </li>
                    <li><a href="#footer"> Contactanos</a></li>
                </ul>
            </div>
        </div>
    )
}
export default Nav;