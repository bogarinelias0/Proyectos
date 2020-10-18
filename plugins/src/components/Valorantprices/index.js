import React, { useEffect, useState } from 'react';
import { getValPricing } from '../../libs/rulesval';

const ValPricing = ({ currentLeagueval, currentDivisionval, nextLeagueval, nextDivisionval }) => {
    const [pricing, setPricing] = useState('');

    useEffect(() => {
        if(currentLeagueval && currentDivisionval && nextLeagueval && nextDivisionval) {
            const price = getValPricing(currentLeagueval, currentDivisionval, nextLeagueval, nextDivisionval);
            setPricing(price);
        }
    });

    return (
        <div className='container_widget'>
            <h2> { pricing } </h2>
        </div>
    )
};

export default ValPricing;