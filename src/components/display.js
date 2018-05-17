import React from 'react';

const Display = (props) => {
    return (
        <div className="display">
            <h3>{props.title}</h3>
            {props.description}</div>
    );
};

export default Display;