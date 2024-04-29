import React, { useState, useEffect } from 'react';
//import {updateScore, teamAScore} from './ScorecardColumn.js';
import './QuestionCounter.css';
import * as S from "./setup.js";
import { useScores } from './ScoreContext';
import { returnTeamAScore } from "./ScorecardColumn.js";

// import ScorecardColumn from './ScorecardColumn';



export function ScoreCounter () {
    const [counter, setCounter] = useState(0);
    const { teamAScore } = useScores();
    //const [teamAScore, setTeamAScore] = useState(S.teamA.score)

    //WRITE CODE HERE
    return (
        <div className="counter-container-2">
            <div className="counter-content">
                <h3>Team 1 Score</h3>
                <h1>{teamAScore}</h1>
                
            </div>
        </div>
    );
}

export function ScoreCounter2 () {
    const [counter, setCounter] = useState(0);
    const { teamBScore } = useScores();
    //const [teamAScore, setTeamAScore] = useState(S.teamA.score)

    //WRITE CODE HERE
    return (
        <div className="counter-container-2">
            <div className="counter-content">
                <h3>Team 2 Score</h3>
                <h1>{teamBScore}</h1>
            </div>
        </div>
    );
}

function QuestionCounter () {
    const [counter, setCounter] = useState(0);
    return (
        <div className="counter-container-1">
            <ScoreCounter />
            <div className="counter-content">
                <h3>Question Number</h3>
                <h1>{counter}</h1>
                
            </div>
            <ScoreCounter2 />
        </div>

    );
}

export default QuestionCounter;
