import React from 'react';
import './index.css';

export default props => {
    let classes = 'button ';
    classes += props.operation ? 'operation ': '';
    classes += props.double ? 'double ': '';
    classes += props.triple ? 'triple': '';

    return (
        <button
            onClick={e => props.click(props.label, e)}        
            className={classes}
        >
            {props.label}
        </button>
    )

}
