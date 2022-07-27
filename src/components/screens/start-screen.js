import React from 'react';

import ScreenText from './screen-ui/screen-text';
import ScreenButton from './screen-ui/screen-button';

import classes from './screen.module.css';

const StartScreen = (props) => {
    return (
        <div className={`${classes.screen}`}>
            <ScreenText>
                <h1>Добро пожаловать!</h1>
                <p>Это небольшой тест на знание JS, состоящий из 10 вопросов.</p>
                <p>Давайте начнем?</p>
            </ScreenText>
            <ScreenButton clickHandler={props.clickHandler}>Давайте!</ScreenButton>
        </div>
    );
};

export default StartScreen;