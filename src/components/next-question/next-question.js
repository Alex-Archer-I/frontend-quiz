import React from 'react';

import classes from './next-question.module.css';

const NextQuestion = (props) => {
    let activeClasses = `${classes.next} ${classes.card}`;

    if (props.isAnswered === false) {
        activeClasses = activeClasses + ` ${classes['inactive-next']}`;
    };

    return (
        <button 
            className={activeClasses} 
            onClick={props.nextQuestionClickHandler}>Следующий вопрос</button>
    );
};

export default NextQuestion;