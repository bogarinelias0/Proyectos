import React, { useState } from 'react';
import { divisions } from '../../constants/divisions';
import { leagues } from '../../constants/leagues';
import Divisions from '../Divisions';
import Leagues from '../Leagues';
import Slider from '../Slider';

const LoLSelector = ({
    onLeagueChange,
    onDivisionChange,
    label,
    currentLeague,
    currentDivision,
    divisionSelector,
    leagueSelector
}) => {
    return(
        <div className='container_widget'>
            <h2> {label} </h2>
            <Slider updateCurrent={onLeagueChange} current={currentLeague} size={leagues.length} id={leagueSelector}>
                <Leagues className='carousel-inner container_ss' enabled={currentLeague} leagues={leagues}/>
            </Slider>
            <Slider updateCurrent={onDivisionChange} current={currentDivision} size={divisions.length} id={divisionSelector}>
                <Divisions className='carousel-inner container_ss' enabled={currentDivision} divisions={divisions}/>
            </Slider>
        </div>
    )
}

export default LoLSelector;