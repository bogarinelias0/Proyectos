import React from 'react';
import LeftArrow from '../LeftArrow';
import RigthArrow from '../RigthArrow';

const Duoslider = ({ children, updateCurrent, current, size, id }) => {

    const handlePrevItem = (evt) => {
        evt.stopPropagation();
        if( current >= 0) {
            updateCurrent(current-1);
        }
    };

    const handleNextItem = (evt) => {
        evt.stopPropagation();
        if( current >= 0 && current < size ) {
            updateCurrent(current+1);
        }
    };

    return(
        <div className='carousel slide' id={id} data-ride="carousel" data-wrap="false" data-infinite='false' data-interval="false">
            { children }
            <LeftArrow goPrev={handlePrevItem} href={id} hide={`${current === 0 && 'hide'}`}/>
            <RigthArrow goNext={handleNextItem} href={id}  hide={`${current === (size -1) && 'hide'}`}/>
        </div>
    )
};

export default Duoslider;