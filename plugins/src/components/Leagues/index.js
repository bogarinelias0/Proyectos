import React from 'react';
import League from '../League';

const Leagues = ({ className, leagues, enabled }) => {
    const getLeagues = () => leagues.map((league, i) => <League key={i} { ...league } className={`${enabled == i ? 'active' : '' }`}/> );

    return(
        <div className={`${className}`}>
            { getLeagues() }
        </div>
    )
};

export default Leagues;