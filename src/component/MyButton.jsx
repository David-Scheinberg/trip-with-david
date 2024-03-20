import React from 'react'

const MyButton = (props) => {
    const isActive = (props.number === props.activeButton);
    return (
        <button
            onClick={() => props.onEach(props.number)}
            className={`page-item page-link ${isActive ? 'active' : ''}`}
        >
            {props.number}
        </button>
    );
};

export default MyButton