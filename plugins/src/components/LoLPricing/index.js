import React, { useEffect, useState } from 'react';
import { getLoLPricing } from '../../libs/rules';

const LoLPricing = ({ currentLeague, currentDivision, nextLeague, nextDivision }) => {
    const [pricing, setPricing] = useState('');

    useEffect(() => {
        if(currentLeague && currentDivision && nextLeague && nextDivision) {
            const price = getLoLPricing(currentLeague, currentDivision, nextLeague, nextDivision);
            setPricing(price);
        }
    });

    return (
        <div className='container_widget'>
            <h2> { pricing } </h2>
        </div>
    )
};

export default LoLPricing;