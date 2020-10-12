import React from 'react';
import './League.css';

const League = ({ img, className }) => {
    return(
        <div className={`carousel-item ${className}`}>
            <img src={img.src} className='d-block' alt='...'/>
        </div>
    );
};

export default League;