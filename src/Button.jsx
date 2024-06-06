import PropTypes from 'prop-types';
import React, { useState } from 'react';

export default function Button(props) {
    const { name, isActive= false, onClick } = props;

    return (
        <div className="button-container">
            <button
                style={{ backgroundColor: isActive ? "white" : "" ,
                         color: isActive ? "#000000" : ""

                }}
                onClick={onClick}
            >
                {name}
            </button>
        </div>
    )
}

Button.propTypes = {
    name: PropTypes.string.isRequired,
    isActive: PropTypes.bool,
    onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
    isActive: false, // Default value for isActive prop is false
    onClick: () => {} // Default value for onClick prop is an empty function
};