import React, {useState} from 'react';

import StartScreen from './components/screens/start-screen';
import ResultScreen from './components/screens/result-screen';

import QuestionModule from './components/question/question-module';
import NextQuestionField from './components/next-question/next-question-field';
import QuestionMarkers from './components/question-markers/question-markers';

const App = () => {
    const [screen, setScreen] = useState('start');
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isAnswered, setIsAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(null);
    const [answeredQuestions, setAnsweredQuestions] = useState([]);

    const answerClickHandler = (answer) => {
        setIsAnswered(true);
        setIsCorrect(answer);

        setAnsweredQuestions(() => {
            const newAnswers = [...answeredQuestions];
            newAnswers.push(answer);
            return newAnswers;
        });
    };

    const nextQuestionClickHandler = () => {
        if (isAnswered === false) {
            return;
        };

        if (currentQuestion === 9) {
            setScreen('result');
            return;
        };

        setCurrentQuestion(() => {return currentQuestion + 1});
        setIsAnswered(false);
        setIsCorrect(null);
    };

    const startGameHandler = () => {
        setScreen('game');
    };

    const restartGame = () => {
        setCurrentQuestion(0);
        setIsAnswered(false);
        setIsCorrect(null);
        setAnsweredQuestions([]);
        setScreen('game');
    };

    if (screen === 'start') {
        return (
            <main>
                <StartScreen clickHandler={startGameHandler}/>
            </main>
        );
    };

    if (screen === 'game') {
        return (
            <main>
                <QuestionMarkers 
                    currentQuestion={currentQuestion}
                    answeredQuestions = {answeredQuestions}/>
                <QuestionModule 
                    currentQuestion={currentQuestion}  
                    answerClickHandler={answerClickHandler}
                    isAnswered={isAnswered}/>
                <NextQuestionField 
                    isAnswered={isAnswered} 
                    isCorrect={isCorrect}
                    nextQuestionClickHandler={nextQuestionClickHandler}/>
            </main>
        );
    };

    if (screen === 'result') {
        return (
            <main>
                <ResultScreen restartGame={restartGame} answeredQuestions={answeredQuestions}/>
            </main>
        );
    };
};

export default App;