import React from 'react';
import { duoleagues } from '../../constants/duoleagues';
import Duoleague from '../Duoleague';

const Duoleagues = ({ className, duoleagues, enabled }) => {
    const getDuoleagues = () => duoleagues.map((league, i) => <Duoleague key={i} { ...league } className={`${enabled == i ? 'active' : '' }`}/> );

    return(
        <div className={`${className}`}>
            { getDuoleagues() }
        </div>
    )
};

export default Duoleagues;