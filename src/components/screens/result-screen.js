import React from 'react';

import ScreenText from './screen-ui/screen-text';
import ScreenButton from './screen-ui/screen-button';

import classes from './screen.module.css';

const ResultScreen = ({answeredQuestions, restartGame}) => {
    const correctAnswers = answeredQuestions.filter(answer => answer === true);

    let text = '';

    if (correctAnswers.length === 0) {
        text = 'Возможно вы плохо знаете JS, возможно вы отвечали наугад или звезды сговорились с кофейной гущей и сегодня просто не ваш день. Не расстраивайтесь!';
    };

    if (correctAnswers.length >= 1 && correctAnswers.length <= 5) {
        text = 'Неплохо, но наверняка вы можете лучше!';
    };

    if (correctAnswers.length >= 6 && correctAnswers.length <= 9) {
        text = 'Это весьма хороший результат!';
    };

    if (correctAnswers.length === 10) {
        text = 'Отлично! Возможно вы гений JS! Или я недостаточно старался с этими вопросами...';
    };

    return (
        <div className={`${classes.screen}`}>
            <ScreenText>
                <h2>{correctAnswers.length} / {answeredQuestions.length}</h2>
                <p>{text}</p>
            </ScreenText>
            <ScreenButton clickHandler={restartGame}>Попробовать снова</ScreenButton>
        </div>
    );
};

export default ResultScreen;