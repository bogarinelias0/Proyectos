import React, { useState } from 'react';
import { duodivisions } from '../../constants/duodivisions';
import { duoleagues } from '../../constants/duoleagues';
import DuoPricing from '../Duopricing';
import DuoSelector from '../Duoselector';
import './duoboostlol.css'
const LABEL_LIGA_ACTUAL_PREGUNTA = '¿En qué liga te encontrás?';
const LABEL_LIGA_SIGUIENTE_PREGUNTA = '¿A cual liga queres llegar?';

const Duolol = () => { 
    const [currentLeagueduo, setCurrentLeagueduo] = useState(0);
    const [currentDivisionduo, setCurrentDivisionduo] = useState(0);
    const [nextLeagueduo, setNextLeagueduo] = useState(0);
    const [nextDivisionduo, setNextDivisionduo] = useState(0);

    const updateCurrentLeagueduo = value => {
        setCurrentLeagueduo(value);
    };

    const updateNextLeagueduo = value => {
        setNextLeagueduo(value);
    };

    const updateCurrentDivisionduo = value => {
        setCurrentDivisionduo(value);
    };

    const updateNextDivisionduo = value => {
        setNextDivisionduo(value);
    };

    return(
        <div className='backgroundlol'>
            <div className='container'>
                <DuoSelector 
                    label={LABEL_LIGA_ACTUAL_PREGUNTA}
                    leagueSelectorduo='leagueFrom'
                    onLeagueChangeduo={updateCurrentLeagueduo}
                    currentLeagueduo={currentLeagueduo}
                    divisionSelectorduo='divisionFrom'
                    currentDivisionduo={currentDivisionduo}
                    onDivisionChangeduo={updateCurrentDivisionduo}
                />
                <DuoSelector 
                    label={LABEL_LIGA_SIGUIENTE_PREGUNTA}
                    currentLeagueduo={nextLeagueduo}
                    leagueSelectorduo='leagueTo'
                    onLeagueChangeduo={updateNextLeagueduo}
                    divisionSelectorduo='divisionTo'
                    currentDivisionduo={nextDivisionduo}
                    onDivisionChangeduo={updateNextDivisionduo}
                />
                <DuoPricing
                    currentLeagueduo={duoleagues[currentLeagueduo]}
                    currentDivisionduo={duodivisions[currentDivisionduo]}
                    nextLeagueduo={duoleagues[nextLeagueduo]}
                    nextDivisionduo={duodivisions[nextDivisionduo]}
                />
            </div>
        </div>
      
    );
};

export default Duolol;