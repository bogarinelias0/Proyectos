import React from 'react';
import './Division.css';

const Division = ({ className, name }) => {
    return(
        <div className={`carousel-item ${className}`}>
            <h1 className='division'> {name} </h1>
        </div>
    )
};

export default Division;