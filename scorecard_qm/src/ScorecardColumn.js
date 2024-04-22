import React, { useState } from "react";
import "./App.css";
import * as S from "./setup.js";
import { setListA } from "./setup.js";
import {ScoreCounter} from "./QuestionCounter.js";

// export function updateScore(){
//   S.ScoreCounter.document.getElementById("teamAScore").innerHTML = S.teamA.score
//   //S.innerHTML = S.teamA.score
//   //return S.teamA.score
// }
export function returnTeamAScore() {
  return teamAScore;
}

export function ScorecardColumn() {
  let currentQuizzer = S.teamA.players[0];
  const [teamAScore, setTeamAScore] = useState(S.teamA.score);
  const [teamAFouls, setTeamAFoulCount] = useState(S.teamA.fouls);
  const [teamATimeouts, setTeamATimeouts] = useState(S.teamA.timeouts);
  const [teamBScore, setTeamBScore] = useState(S.teamB.score);
  const [teamBFouls, setTeamBFoulCount] = useState(S.teamB.fouls);
  const [teamBTimeouts, setTeamBTimeouts] = useState(S.teamB.timeouts);
  const [isScoreSelected, setIsScoreSelected] = useState(false);
  const [confirmClicked, setConfirmClicked] = useState(false);
  const [editClicked, setEditClicked] = useState(true); // Edit button is initially lit up
  const [otherStuffDisabled, setOtherStuffDisabled] = useState(false);
  const handleConfirmClick= () =>{
    setConfirmClicked(true);
    setEditClicked(false);
    setOtherStuffDisabled(true);
  }

  const handleEditClick = () => {
    setEditClicked(true);
    setConfirmClicked(false);
    setOtherStuffDisabled(false);
  };

  let questionNumber = 1
  let questionsByNumber = [];

  
  // Function to handle foul button clicks
  function handleFoulButtonClick(team) {
    if (team === S.teamA) {
      team.fouls += 1;
      setTeamAFoulCount(team.fouls);
      if (team.fouls % 3 === 0) {
        team.score -= 10;
        setTeamAScore(team.score);
      }
    } else {
      team.fouls += 1;
      setTeamBFoulCount(team.fouls);
      if (team.fouls % 3 === 0) {
        //create an alert?
        team.score -= 10;
        setTeamBScore(team.score);
      }
    }
  }

  

  function handlePoints(team) {
    updatePlayer(team)
    let val = document.getElementById("pointsDropdown").value;
    console.log(team.score)
    console.log(currentQuizzer)
    if (val == "+10") {
      team.score += 10;
    } else if (val == "+20") {
      team.score += 20;
      currentQuizzer.personalScore += 20;
      currentQuizzer.correctAnswers += 1;
      //console.log(currentQuizzer)
    } else if (val == "-10") {
      //is there a rule for if the team gets so many answers wrong?
      team.score -= 10;
      currentQuizzer.personalScore -= 10;
    } else {
      team.score -= 20;
    }
    if (team === S.teamA) {
      setTeamAScore(team.score);
    } else {
      setTeamBScore(team.score);
    }
    setIsScoreSelected(true);
    let foulBool = false
    var selectorQ = document.getElementById("QuestionType");
    //var newQuestion = new Question(questionNumber, team.name, currentQuizzer.name, val, selectorQ.value, foulBool);// need to figure out foul bool
    //questionsByNumber[questionNumber] = newQuestion;
    questionNumber++; //this should hopefully be incremented along with the visual changes
    console.log(currentQuizzer)
    console.log(team.score)
    //ScoreCounter()
  }

  // Function to handle timeout button clicks
  function handleTimeoutButtonClick(team) {
    if (team === S.teamA) {
      if (team.timeouts >= 3) {
        alert("No Timeouts Left");
      } else {
        team.timeouts += 1;
        setTeamATimeouts(S.teamA.timeouts);
      }
    } else {
      if (team.timeouts >= 3) {
        alert("No Timeouts Left");
      } else {
        team.timeouts += 1;
        setTeamBTimeouts(team.timeouts);
      }
    }
  }

  function updatePlayer(team) {
    if (team === S.teamA) {
      var selector = document.getElementById("TeamAPlayers");
      currentQuizzer = team.players.find((obj) => obj.name === selector.value)
    } else {
      var selector = document.getElementById("TeamBPlayers");
      currentQuizzer = team.players.find((obj) => obj.name === selector.value)
    }
  }

  function Question(questionNumber, teamName, player, points, type, foulBool){
    this.questionNumber = questionNumber;
    this.teamName = teamName;
    this.player = player;
    this.points = points;
    this.type = type;
    this.foulBool = foulBool;
  }

  function addQuestion(questionNumber, teamName, player, points, type, foulBool) {
    var newQuestion = new Question(questionNumber, teamName, player, points, type, foulBool);
    questionsByNumber[questionNumber] = newQuestion;
    questionNumber++;
  }
  
  function getQuestionType(){
    var selectorQ = document.getElementById("QuestionType");
    return selectorQ.value;
  }

  return (
    <div className="table-container">
      <table id="select_cols">
        <thead>
          <tr>
            <th>Question #</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <select disabled={otherStuffDisabled}>
                <option id="unselected" value="---">
                   Type
                </option>
                <option value="FTV-Quote">FTV-First Words</option>
                <option value="FTV-Quote">FTV-Quote</option>
                <option value="Location">Location</option>
                <option value="Reference">Reference</option>
                <option value="Regular">Regular</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
             <select
                onClick={() => setListA(S.teamA.players)}
                id="TeamAPlayers" disabled={otherStuffDisabled}>
                <option id="unselected" value="---">
                    Name
                </option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <select onChange={() => handlePoints(S.teamA)}id="pointsDropdown" defaultValue={"---"} disabled={otherStuffDisabled}>
                <option id="unselected" value="---">
                  Points
                </option>
                <option value="+10">+10</option>
                <option value="+20">+20</option>
                <option value="-10">-10</option>
                <option value="-20">-20</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <select defaultValue={"---"} disabled={otherStuffDisabled}>
                <option id="unselected" value="---">
                  Bonus
                </option>
                <option>Bonus val</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={() => handleFoulButtonClick(S.teamA)} id="table_button" disabled={otherStuffDisabled}>Add Foul</button >
            </td>
          </tr>
          <tr>
            <td>
              {isScoreSelected ? teamAScore : "Select a score"}
            </td>
          </tr>
          <tr>
          <tr>
              <button onClick={handleConfirmClick} disabled={confirmClicked}>{confirmClicked? "Confirmed": "Confirm?"}</button>
              <button onClick={handleEditClick} disabled={editClicked}>{editClicked ? "Editing": "Edit"}</button>
            </tr>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ScorecardColumn;
