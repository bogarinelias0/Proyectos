import React from 'react';
import Coaches from '../Coaches';
import LoL from '../LoL';
import Valorant from '../Valorant';
import Header from '../Header'
import Coachinglol from '../Coachinglol'
import './Widget.css';
import Nav from '../Nav';
import Ventacuentaslol from '../ventadecuentaslol/ventacuentas';

const Widget = () => { 
    return(
        <div className=''>
            <Nav />
            <Header />
            <LoL />
            <Coachinglol />
            <Ventacuentaslol />
            <Valorant />
            <Coaches />
        </div>
    );
};

export default Widget;