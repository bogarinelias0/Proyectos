import React from 'react';

const RigthArrow = ({ href, goNext, hide }) => {
    return(
        <a className={`carousel-control-next ${hide}`}
            href={`#${href}`}
            role="button"
            data-slide="next"
            onClick={goNext}
        >
            <span className="carousel-control-next-icon"
                aria-hidden="true"
            >
            </span>
            <span className="sr-only">Next</span>
        </a>
    )
};

export default RigthArrow;