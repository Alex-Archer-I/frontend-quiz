import React from 'react';

import Comment from './comment';
import NextQuestion from './next-question';

import classes from './next-question.module.css';

const NextQuestionField = (props) => {
    let activeClasses = `${classes['next-question']}`;

    if (props.isAnswered === false) {
        activeClasses = activeClasses + ` ${classes.inactive}`;
    };

    return (
        <div className={activeClasses}>
            <Comment 
                isCorrect={props.isCorrect}/>
            <NextQuestion 
                isAnswered={props.isAnswered} 
                nextQuestionClickHandler={props.nextQuestionClickHandler}/>
        </div>
    );
};

export default NextQuestionField;