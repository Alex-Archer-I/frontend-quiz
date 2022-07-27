import React from 'react';

import Question from './question';
import AnswerField from './answer-field';

import questionsJS from '../../data/questions-js';

import classes from './question.module.css';

const QuestionModule = (props) => {
    const question = questionsJS[props.currentQuestion];

    return (
        <div className={classes['question-module']}>
            <Question text={question.question}/>
            <AnswerField 
                answers={question.answers} 
                answerClickHandler={props.answerClickHandler}
                isAnswered={props.isAnswered}/>
        </div>
    );
};

export default QuestionModule;