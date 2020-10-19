import React, { useState } from 'react';
import { duodivisions } from '../../constants/duodivisions';
import { duoleagues } from '../../constants/duoleagues';
import Duodivisions from '../Duodivisions';
import Duoleagues from '../Duoleagues';
import Duoslider from '../Duoslider';

const DuoSelector = ({
    onLeagueChangeduo,
    onDivisionChangeduo,
    label,
    currentLeagueduo,
    currentDivisionduo,
    divisionSelectorduo,
    leagueSelector
}) => {
    return(
        <div className='container_widget'>
            <h2> {label} </h2>
            <Duoslider updateCurrent={onLeagueChangeduo} current={currentLeagueduo} size={duoleagues.length} id={leagueSelector}>
                <Duoleagues
                className='carousel-inner container_ss' 
                enabled={currentLeagueduo} 
                duoleagues={duoleagues}
                />
            </Duoslider>
            <Duoslider updateCurrent={onDivisionChangeduo} current={currentDivisionduo} size={duodivisions.length} id={divisionSelectorduo}>
                <Duodivisions 
                className='carousel-inner container_ss' 
                enabled={currentDivisionduo} 
                duodivisions={duodivisions}/>
            </Duoslider>
        </div>
    )
}

export default DuoSelector;