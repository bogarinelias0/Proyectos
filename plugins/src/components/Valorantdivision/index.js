import React from 'react';
import './divisionvalorant.css';

const Valorantdivision = ({ className, name }) => {
    return(
        <div className={`carousel-item ${className}`}>
            <h1 className='division'> {name} </h1>
        </div>
    )
};

export default Valorantdivision;