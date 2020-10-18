import React from 'react';
import Duodivision from '../Duodivision';

const Duodivisions = ({ divisionsduoo, enabled, className }) => {
    const getDuodivisions = () => divisionsduoo.map((divisionduo, i) => <Duodivision key={i} { ...divisionduo } className={`${enabled == i ? 'active' : '' }`} />);

    return(
        <div className={`${className}`}>
            { getDuodivisions() }
        </div>
    )
};

export default Duodivisions;