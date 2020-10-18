import React, { useState } from 'react';
import { valdivisions } from '../../constants/valdivisions';
import { leaguesval } from '../../constants/leaguesval';
import ValPricing from '../Valorantprices';
import ValSelector from '../Valorantselector';
const LABEL_LIGA_ACTUAL_PREGUNTA = '¿En qué rango te encontrás?';
const LABEL_LIGA_SIGUIENTE_PREGUNTA = '¿A cual rango queres llegar?';

const Duoval = () => { 
    const [currentLeagueval, setCurrentLeagueval] = useState(0);
    const [currentDivisionval, setCurrentDivisionval] = useState(0);
    const [nextLeagueval, setNextLeagueval] = useState(0);
    const [nextDivisionval, setNextDivisionval] = useState(0);

    const updateCurrentLeagueval = value => {
        setCurrentLeagueval(value);
    };

    const updateNextLeagueval = value => {
        setNextLeagueval(value);
    };

    const updateCurrentDivisionval = value => {
        setCurrentDivisionval(value);
    };

    const updateNextDivisionval = value => {
        setNextDivisionval(value);
    };

    return(
        <div className='backgroundlol'>
            <div className='container'>
                <ValSelector 
                    label={LABEL_LIGA_ACTUAL_PREGUNTA}
                    valSelector='leagueFrom'
                    onLeagueChangeval={updateCurrentLeagueval}
                    currentLeagueval={currentLeagueval}
                    divisionSelectorval='divisionFrom'
                    currentDivisionval={currentDivisionval}
                    onDivisionChange={updateCurrentDivisionval}
                />
                <ValSelector 
                    label={LABEL_LIGA_SIGUIENTE_PREGUNTA}
                    currentLeagueval={nextLeagueval}
                    valSelector='leagueTo'
                    onLeagueChangeval={updateNextLeagueval}
                    divisionSelectorval='divisionTo'
                    currentDivisionval={nextDivisionval}
                    onDivisionChange={updateNextDivisionval}
                />
                <ValPricing
                    currentLeagueval={leaguesval[currentLeagueval]}
                    currentDivisionval={valdivisions[currentDivisionval]}
                    nextLeagueval={leaguesval[nextLeagueval]}
                    nextDivisionval={valdivisions[nextDivisionval]}
                />
            </div>
        </div>
      
    );
};

export default Duoval;