import React, { useState } from 'react';
import { valdivisions } from '../../constants/valdivisions';
import { leaguesval } from '../../constants/leaguesval';
import Valorantdivisions from '../Valorantdivisions';
import Valorantleagues from '../Valorantleagues';
import Valslider from '../Valorantslider';

const ValSelector = ({
    onLeagueChangeval,
    onDivisionChange,
    label,
    currentLeagueval,
    currentDivisionval,
    divisionSelectorval,
    leagueSelector
}) => {
    return(
        <div className='container_widget'>
            <h2> {label} </h2>
            <Valslider updateCurrent={onLeagueChangeval} current={currentLeagueval} size={leaguesval.length} id={leagueSelector}>
                <Valorantleagues
                    className='carousel-inner container_ss'
                    enabled={currentLeagueval}
                    leaguesvalorant={leaguesval}
                />
            </Valslider>
            <Valslider updateCurrent={onDivisionChange} current={currentDivisionval} size={valdivisions.length} id={divisionSelectorval}>
                <Valorantdivisions 
                    className='carousel-inner container_ss'
                    enabled={currentDivisionval}
                    divisionsval={valdivisions}
                />
            </Valslider>
        </div>
    )
}

export default ValSelector;