import React from 'react';
import Coaches from '../Coaches';
import LoL from '../LoL';
import Valorant from '../Valorant';
import './Widget.css';

const Widget = () => { 
    return(
        <div className='container'>
            <LoL />
            <Valorant />
            <Coaches />
        </div>
    );
};

export default Widget;