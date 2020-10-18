import React from 'react';
import Duoleague from '../Duoleague';

const Duoleagues = ({ className, duoleagues, enabled }) => {
    const getDuoleagues = () => duoleagues.map((leagueduoo, i) => <Duoleague key={i} { ...leagueduoo } className={`${enabled == i ? 'active' : '' }`}/> );

    return(
        <div className={`${className}`}>
            { getDuoleagues() }
        </div>
    )
};

export default Duoleagues;