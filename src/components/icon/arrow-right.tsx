import React from "react";

const ArrowRightIcon: React.FC<IPropIcon> = ({ classAdded }) => {
    return (
        <svg className={ classAdded } fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            viewBox="0 0 24 24">
            <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
    );
}

export default ArrowRightIcon;