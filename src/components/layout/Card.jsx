import React from 'react';
import './Card.css';
export default (props) => {
    const cardStyle = {
        backgroundColor: props.color || '#6C757D',
        borderColor: props.color || '#6C757D',
    };
    return (
        <div className='Card' style={cardStyle}>
            <h2 className="Title">{props.titulo}</h2>
            <div className="Content">
                {props.children}
            </div>
        </div>
    );
};
