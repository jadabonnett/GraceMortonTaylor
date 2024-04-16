import React, { useState } from 'react';
//import {updateScore, teamAScore} from './ScorecardColumn.js';
import './QuestionCounter.css';
import * as S from "./setup.js";

// import ScorecardColumn from './ScorecardColumn';

export function ScoreCounter () {
    const [counter, setCounter] = useState(0);
    const [teamAScore, setTeamAScore] = useState(S.teamA.score)
    return (
        <div className="counter-container-2">
            <div className="counter-content">
                <h3>Team 1 Score</h3>
                <h1>{teamAScore}</h1>
                <div className="button-container">
                    <button onClick={() => { 
                            setCounter(counter - 10)}
                    }>-</button>
                    <button onClick={() => {
                        setCounter(counter + 10)}
                    }>+</button>
                </div>
            </div>
        </div>
    );
}

function QuestionCounter () {
    const [counter, setCounter] = useState(0);
    return (
        <div className="counter-container-1">
            <div className="counter-content">
                <h3>Question Number</h3>
                <h1>{counter}</h1>
                <div className="button-container">
                    <button onClick={() => { 
                        if (counter > 0)
                            setCounter(counter - 1)}
                    }>-</button>
                    <button onClick={() => {
                        if (counter < 25)
                        setCounter(counter + 1)}
                    }>+</button>
                </div>
            </div>
            <ScoreCounter />
        </div>

    );
}

export default QuestionCounter;
