import PropTypes from 'prop-types';
import React from 'react';


export default function Button({ name, isActive = false, onClick = () => {} }) {
    return (
        <div className="button-container">
            <button
                style={{
                    backgroundColor: isActive ? "white" : "",
                    color: isActive ? "#000000" : ""
                }}
                onClick={onClick}
            >
                {name}
            </button>
        </div>
    );
}

Button.propTypes = {
    name: PropTypes.string.isRequired,
    isActive: PropTypes.bool,
    onClick: PropTypes.func
};
