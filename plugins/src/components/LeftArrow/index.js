import React from 'react';

const LeftArrow = ({ href, goPrev, hide }) => {
    return(
        <a className={`carousel-control-prev ${hide}`}
            href={`#${href}`}
            role="button"
            data-slide="prev"
            onClick={goPrev}
        >
            <span className="carousel-control-prev-icon"
                aria-hidden="true"
            >
            </span>
            <span className="sr-only">Previous</span>
        </a>
    )
};

export default LeftArrow;