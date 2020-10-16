import React from 'react';
import LoL from '../LoL';
import Valorant from '../Valorant';
import Header from '../Header'
import Coachinglol from '../Coachinglol'
import './Widget.css';
import Nav from '../Nav';
import Ventacuentaslol from '../ventadecuentaslol/ventacuentas';
import Coachvalorant from '../coachingvalorant'
import Ventacuentasval from '../ventacuentasvalorant/ventacuentasvalorant';
import Fondocss from '../Csgofondo';
import Csboost from '../Eloboostcs';
import Cuentascs from '../compracuentascs';
import Coachingcs from '../coachingcsgo';
import Tft from '../Tft';
import Footer from '../Footer'
import FirstHeader from '../FirstHeader';
const Widget = () => { 
    return(
        <div>
            <Nav />
            <Header />
            <LoL />
            <Coachinglol />
            <Ventacuentaslol />
            <Valorant />
            <Ventacuentasval />
            <Coachvalorant />
            <Fondocss/>
            <Csboost />
            <Cuentascs />
            <Coachingcs />
            <Tft />
            <Footer />
        </div>
    );
};

export default Widget;