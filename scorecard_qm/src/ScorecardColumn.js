import React, { useState, useEffect } from "react";
import "./App.css";
import * as S from "./setup.js";
//import { setListA } from "./setup.js";
import {ScoreCounter} from "./QuestionCounter.js";
const teamMembers = []

export function updateScore(){
  ScoreCounter.document.getElementById("teamAScore").innerHTML = S.teamA.score
  //S.innerHTML = S.teamA.score
  //return S.teamA.score
}

S.teamA.players.forEach(el => {teamMembers.push(el.name)})

//TO_DO

// - figure out how the columns work, how to get them to repeat
// - incrementing question num when moving through quiz-off
// - undo action

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

  const [selectedType, setSelectedType] = useState('');
  const [selectedName, setSelectedName] = useState('');
  const [selectedPoints, setSelectedPoints] = useState('');

  useEffect(() => {
    // Check if all required dropdowns are selected
    const allSelected = selectedType && selectedName && selectedPoints;
    setConfirmClicked(!allSelected);
  }, [selectedType, selectedName, selectedPoints]);

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleNameChange = (event) => {
    setSelectedName(event.target.value);
  };

  const handlePointsChange = (event) => {
    setSelectedPoints(event.target.value);
  };

  //changed from const to function
   /*  const handleConfirmClick= () =>{
      setConfirmClicked(true);
      setEditClicked(false);
      setOtherStuffDisabled(true);
    } */
  
  function handleConfirmClick(){
    setConfirmClicked(true);
    setEditClicked(false);
    setOtherStuffDisabled(true);
    handlePoints(S.teamA);
    }

  const handleEditClick = () => {
    setEditClicked(true);
    setConfirmClicked(false);
    setOtherStuffDisabled(false);
  };

  const [foulAdded, setFoulAdded] = useState(false);
  const [foulUndo, setFoulUndo] = useState(false); //still working on

  const [questionNumber, setQuestionNumber] = useState(1); // still working on
  let questionsByNumber = {};
  let questionTypes = ["FTV", "Location", "Reference", "Regular", "Scriptural", "Situation"];

  // Function to handle foul button clicks
  function handleFoulButtonClick(team) {
    setFoulAdded(prevFoulAdded => !prevFoulAdded);
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

    let questionNumber = Object.keys(questionsByNumber).length+1;
    var questionType = getQuestionType();
    addQuestion(questionNumber, team.teamName, currentQuizzer.name, val, questionType, foulAdded);
    setQuestionNumber(prevQuestionNumber => prevQuestionNumber + 1);
    console.log(questionsByNumber);
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
        </thead>
        <tbody>
          <tr>
            <td>
      <select id="QuestionType" onChange={handleTypeChange} required disabled={otherStuffDisabled}>
            <option id="unselected" value="---">
                  Type
            </option>
        {questionTypes.map(type => (
          <option key={type} value={type}>{type}</option>
        ))}
      </select>  

            </td>
          </tr>
          <tr>
            <td>
{/*             <select
                id="TeamAPlayers" disabled={otherStuffDisabled}> */}
              <select id="TeamAPlayers" onChange={handleNameChange} required disabled={otherStuffDisabled}>
                <option id="unselected" value="---">
                  Name
                </option>
                {teamMembers.map(type => (
                <option key={type}value={type}>{type}</option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <td>
              {/* <select id="pointsDropdown" defaultValue={"---"} disabled={otherStuffDisabled}> */}
              <select id="pointsDropdown" onChange={handlePointsChange} required disabled={otherStuffDisabled}>
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
              <button onClick={() => handleFoulButtonClick(S.teamA)} id="table_button" disabled={otherStuffDisabled}>{foulAdded ? "Undo foul?" : "Add Foul"}</button >
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
