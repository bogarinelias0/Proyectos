import React, { useState } from 'react';
import { divisions } from '../../constants/divisions';
import { leagues } from '../../constants/leagues';
import LoLPricing from '../LoLPricing';
import LoLSelector from '../LoLSelector';
import './lol.css'
const LABEL_LIGA_ACTUAL_PREGUNTA = '¿En qué liga te encontrás?';
const LABEL_LIGA_SIGUIENTE_PREGUNTA = '¿A cual liga queres llegar?';

const Lol = () => { 
    const [currentLeague, setCurrentLeague] = useState(0);
    const [currentDivision, setCurrentDivision] = useState(0);
    const [nextLeague, setNextLeague] = useState(0);
    const [nextDivision, setNextDivision] = useState(0);

    const updateCurrentLeague = value => {
        setCurrentLeague(value);
    };

    const updateNextLeague = value => {
        setNextLeague(value);
    };

    const updateCurrentDivision = value => {
        setCurrentDivision(value);
    };

    const updateNextDivision = value => {
        setNextDivision(value);
    };

    return(
        <div className='backgroundlol'>
            <div className='container'>
                <LoLSelector 
                    label={LABEL_LIGA_ACTUAL_PREGUNTA}
                    leagueSelector='leagueFrom'
                    onLeagueChange={updateCurrentLeague}
                    currentLeague={currentLeague}
                    divisionSelector='divisionFrom'
                    currentDivision={currentDivision}
                    onDivisionChange={updateCurrentDivision}
                />
                <LoLSelector 
                    label={LABEL_LIGA_SIGUIENTE_PREGUNTA}
                    currentLeague={nextLeague}
                    leagueSelector='leagueTo'
                    onLeagueChange={updateNextLeague}
                    divisionSelector='divisionTo'
                    currentDivision={nextDivision}
                    onDivisionChange={updateNextDivision}
                />
                <LoLPricing
                    currentLeague={leagues[currentLeague]}
                    currentDivision={divisions[currentDivision]}
                    nextLeague={leagues[nextLeague]}
                    nextDivision={divisions[nextDivision]}
                />
            </div>
        </div>
      
    );
};

export default Lol;