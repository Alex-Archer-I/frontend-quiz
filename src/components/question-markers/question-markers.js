import React from 'react';

import Marker from './marker';

import classes from './question-markers.module.css';

const QuestionMarkers = (props) => {
    const markers = [];

    for (let i = 0; i < 10; i++) {
        let condition = '';
        let correct = null;

        if (i < props.answeredQuestions.length && i !== props.currentQuestion) {
            condition = 'inactive';

            correct = props.answeredQuestions[i];
        };

        if (i === props.currentQuestion) {
            condition = 'active';
        };

        markers.push(<Marker condition={condition} correct={correct} text={i + 1} key={i}/>);
    };

    return (
        <div className={classes['question-markers']}>{markers}</div>
    );
};

export default QuestionMarkers;