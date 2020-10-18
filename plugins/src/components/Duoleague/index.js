import React from 'react';
import './leagueval.css';

const Duoleague = ({ img, className }) => {
    return(
        <div className={`carousel-item ${className}`}>
            <img src={img.src} className='d-block' alt='...'/>
        </div>
    );
};

export default Duoleague;