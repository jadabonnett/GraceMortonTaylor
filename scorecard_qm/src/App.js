import React from 'react';
import {BrowserRouter as Router, 
        Routes, 
        Route} from "react-router-dom";
import Scoreboard from "./ScoreboardView.js";
import Scorecard from './ScorecardView.js';

//Uncomment below for fancy look on site

import './App.css';

function NoMatch() {
  return (
    <div style={{ padding: 20 }}>
      <h2>404: Page Not Found</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  );
}

function App() {
return (
  <Router>
    <Routes>
      <Route path="/" element={<Scoreboard />} />
      <Route path="/scorecard_qm" element={<Scorecard />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  </Router>
)
};

export default App;
