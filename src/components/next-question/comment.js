import React from 'react';

import classes from './next-question.module.css';

const Comment = (props) => {
    let text = '';

    if (props.isCorrect === true) {
        text = 'Верно!';
    };

    if (props.isCorrect === false) {
        text = 'Увы, это неправильный ответ.';
    };

    if (props.isCorrect === null) {
        text = 'Ждем ответа...'
    };

    return (
        <div className={`${classes.comment} ${classes.card}`}>{text}</div>
    );
};

export default Comment;