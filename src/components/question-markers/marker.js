import React from 'react';

import classes from './question-markers.module.css';

const Marker = (props) => {
    let activeClasses = `${classes.marker} ${classes.card}`;

    if (props.condition === 'active') {
        activeClasses = activeClasses + ` ${classes.active}`;
    };

    if (props.condition === 'inactive') {
        activeClasses = activeClasses + ` ${classes.inactive}`;
    };

    if (props.correct === true) {
        activeClasses = activeClasses + ` ${classes.correct}`;
    };

    if (props.correct === false) {
        activeClasses = activeClasses + ` ${classes.incorrect}`;
    }

    return (
        <div className={activeClasses}>{props.text}</div>
    );
};

export default Marker;