import React, { useState } from 'react';
//Uncomment below for fancy look on site
//import './App.css';

const TeamScoreboard = ({ teamName }) => {
  const [score, setScore] = useState(0);
  const [foulCount, setFoulCount] = useState(0);

  const handleScoreChange = (value) => {
    setScore(score + value);
  };

  const handleFoul = () => {
    setFoulCount(foulCount + 1);
  };

  return (
    <div>
      <h2>{teamName} Score: {score}</h2>
      <button onClick={() => handleScoreChange(10)}>+10</button>
      <button onClick={() => handleScoreChange(-10)}>-10</button>
      <button onClick={() => handleScoreChange(20)}>+20</button>
      <button onClick={() => handleScoreChange(-20)}>-20</button>
      <button onClick={handleFoul}>Foul</button>
      <p>Foul Count: {foulCount}</p>
      <label for="Player-Name">Choose Player:</label> 
        <select name="Player-Name" id="Player Name">
          <option value="player1">Player 1</option>
          <option value="player2">Player 2</option>
          <option value="player3">Player 3</option>
          <option value="player4">Player 4</option>
        </select>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <TeamScoreboard teamName="Team 1" />
      <TeamScoreboard teamName="Team 2" />
    </div>
  );
};

export default App;

