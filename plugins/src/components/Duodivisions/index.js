import React from 'react';
import Duodivision from '../Duodivision';

const Duodivisions = ({ duodivisions, enabled, className }) => {
    const getDuodivisions = () => duodivisions.map((divisionduo, i) => <Duodivision key={i} { ...divisionduo } className={`${enabled == i ? 'active' : '' }`} />);

    return(
        <div className={`${className}`}>
            { getDuodivisions() }
        </div>
    )
};

export default Duodivisions;