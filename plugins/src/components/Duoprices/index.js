import React, { useEffect, useState } from 'react';
import { getDuoPricing } from '../../libs/rulesval';

const DuoPricing = ({ currentLeagueduo, currentDivisionduo, nextLeagueduo, nextDivisionduo }) => {
    const [pricing, setPricing] = useState('');

    useEffect(() => {
        if(currentLeagueduo && currentDivisionduo && nextLeagueduo && nextDivisionduo) {
            const price = getDuoPricing(currentLeagueduo, currentDivisionduo, nextLeagueduo, nextDivisionduo);
            setPricing(price);
        }
    });

    return (
        <div className='container_widget'>
            <h2> { pricing } </h2>
        </div>
    )
};

export default DuoPricing;