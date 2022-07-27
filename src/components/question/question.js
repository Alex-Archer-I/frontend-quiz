import React from 'react';

import classes from './question.module.css';

const Question = (props) => {
    return (
        <div className={`${classes.question} ${classes.card}`}>{props.text}</div>
    );
};

export default Question;