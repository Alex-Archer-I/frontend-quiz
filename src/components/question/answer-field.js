import React from 'react';

import Answer from './answer';

import classes from './question.module.css';

const AnswerField = (props) => {

    props.answers.sort((a, b) => {
        if (a.index > b.index) {return 1};
        if (a.index === b.index) {return 0};
        if (a.index < b.index) {return -1};
    });

    const answers = props.answers.map((answer) => {
        return <Answer 
                text={answer.text}
                isCorrect={answer.isCorrect}
                key={answer.index}
                answerClickHandler={props.answerClickHandler}
                isAnswered={props.isAnswered}/>;
    });

    return (
        <div className={classes['answer-field']}>{answers}</div>
    );
};

export default AnswerField;