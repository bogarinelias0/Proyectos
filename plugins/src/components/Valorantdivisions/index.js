import React from 'react';
import Valorantdivision from '../Valorantdivision';

const Valorantdivisions = ({ divisionsval, enabled, className }) => {
    const getValorantdivisions = () => divisionsval.map((valdivision, i) => <Valorantdivision key={i} { ...valdivision } className={`${enabled == i ? 'active' : '' }`} />);

    return(
        <div className={`${className}`}>
            { getValorantdivisions() }
        </div>
    )
};

export default Valorantdivisions;