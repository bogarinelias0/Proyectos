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
import Boostval from '../Valorantboost';
import Duoval from '../Valorantduoboost';
import Duolol from '../Duoboostlol';
import Duoq from '../valoranttitleduoq';
import Textolol from '../textoboostlol';
import Textoduoq from '../textoduoq';
const Widget = () => { 
    return(
        <div>
            <Nav />
            <Header />
            <Textolol />
            <LoL />
            <Textoduoq />
            <Duolol />
            <Coachinglol />
            <Ventacuentaslol />
            <Valorant />
            <Boostval />
            <Duoq />
            <Duoval />
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