import React from 'react';
import './Duodivision.css';

const Duodivision = ({ className, name }) => {
    return(
        <div className={`carousel-item ${className}`}>
            <h1 className='division'> {name} </h1>
        </div>
    )
};

export default Duodivision;