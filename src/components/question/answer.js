import React, {useState} from 'react';

import classes from './question.module.css';

const Answer = (props) => {
    const [isClicked, setIsClicked] = useState(false);

    let activeClasses = `${classes.answer} ${classes.card}`;

    if (isClicked === true) {
        activeClasses = activeClasses + ` ${classes.clicked}`;
    };

    if (props.isAnswered === true) {
        if (isClicked === false) {
            activeClasses = activeClasses + ` ${classes.inactive}`;
        };

        if (props.isCorrect === true) {
            activeClasses = activeClasses + ` ${classes.correct}`;
        };

        if (isClicked === true && props.isCorrect === false) {
            activeClasses = activeClasses + ` ${classes.incorrect}`;
        };
    };

    function clickAnswer() {
        if (props.isAnswered === true) {
            return;
        };

        setIsClicked(true);
        props.answerClickHandler(props.isCorrect);
    };

    return(
        <div className={activeClasses} onClick={clickAnswer}>{props.text}</div>
    );
};

export default Answer;