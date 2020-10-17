import React from 'react';
import Valorantdivision from '../Valorantdivision';

const Valorantdivisions = ({ divisions, enabled, className }) => {
    const getValorantdivisions = () => divisions.map((division, i) => <Division key={i} { ...division } className={`${enabled == i ? 'active' : '' }`} />);

    return(
        <div className={`${className}`}>
            { getValorantdivisions() }
        </div>
    )
};

export default Valorantdivisions;