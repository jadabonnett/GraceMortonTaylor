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
                <h1 id="teamAScore">{teamAScore}</h1>
                
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
                
            </div>
            <ScoreCounter />
        </div>

    );
}

export default QuestionCounter;
