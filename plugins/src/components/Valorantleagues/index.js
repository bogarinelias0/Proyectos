import React from 'react';
import Valorantleague from '../Valorantleague';

const Valorantleagues = ({ className, leaguesvalorant, enabled }) => {
    const getValorantleagues = () => leaguesvalorant.map((leagueval, i) => <Valorantleague key={i} { ...leagueval } className={`${enabled == i ? 'active' : '' }`}/> );

    return(
        <div className={`${className}`}>
            { getValorantleagues() }
        </div>
    )
};

export default Valorantleagues;