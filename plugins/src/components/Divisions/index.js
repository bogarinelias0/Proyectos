import React from 'react';
import Division from '../Division';

const Divisions = ({ divisions, enabled, className }) => {
    const getDivisions = () => divisions.map((division, i) => <Division key={i} { ...division } className={`${enabled == i ? 'active' : '' }`} />);

    return(
        <div className={`${className}`}>
            { getDivisions() }
        </div>
    )
};

export default Divisions;