import React from 'react';
import './ScoreboardView.css';
import QuestionCounter from './QuestionCounter';
import ScrollingTable from './ScorecardScroll';
import { useNavigate } from "react-router-dom";
import './setup.js'

function Scorecard() {
    const navigate = useNavigate();
    const scoreboardNav = () => navigate(-1);
  return (
    <div className="scorecard_page">
      < QuestionCounter />
      <div className="scorecard">
        < ScrollingTable />
      </div>

      <button className="btn" onClick={scoreboardNav}>
        Scoreboard View
    </button>
    </div>
  );
}

 export default Scorecard;