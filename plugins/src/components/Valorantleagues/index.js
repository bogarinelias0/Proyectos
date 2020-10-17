import React from 'react';
import Valorantleague from '../Valorantleague';

const Valorantleagues = ({ className, leagues, enabled }) => {
    const getValorantleagues = () => leagues.map((league, i) => <League key={i} { ...league } className={`${enabled == i ? 'active' : '' }`}/> );

    return(
        <div className={`${className}`}>
            { getValorantleagues() }
        </div>
    )
};

export default Valorantleagues;