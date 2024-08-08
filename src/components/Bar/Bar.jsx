
import React from 'react'

export default function Bar({ backgroundColor, textColor }) {
    return (
        <div className="bar flex items-center justify-center mt-6 relative z-50">
            <div className={`w-20 h-1 ${backgroundColor} mr-2`}></div>
            <i className={`fa-solid fa-star ${textColor}`}></i>
            <div className={`w-20 h-1 ${backgroundColor} ml-2`}></div>
        </div>
    );
}
