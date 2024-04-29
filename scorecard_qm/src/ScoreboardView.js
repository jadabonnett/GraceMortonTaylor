import React from 'react';
import { useNavigate } from "react-router-dom";

/*
Most of this code could be replaced with a tweaked version of the
QuestionCounter component, but I'm more worried about porting the 
React Router stuff first.
*/

import QuestionCounter from './QuestionCounter';
import './ScoreboardView.css';

function Scoreboard() {
const navigate = useNavigate();
return (
    <div className="scoreboard_page">
       <QuestionCounter />
        <button className="btn" onClick={() => navigate('/scorecard_qm')}>
            Scorecard View
        </button>
    </div>
);
}

export default Scoreboard;
