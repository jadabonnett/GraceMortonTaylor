// ScoreContext.js
import React, { createContext, useContext, useState } from "react";

export const ScoreContext = createContext(null);

export const ScoreProvider = ({ children }) => {
  const [teamAScore, setTeamAScore] = useState(0);  // Default score set to 0, adjust as needed

  // You can add more states and functions as needed
  return (
    <ScoreContext.Provider value={{ teamAScore, setTeamAScore }}>
      {children}
    </ScoreContext.Provider>
  );
};

// Custom hook to use the score context
export const useScores = () => {
  const context = useContext(ScoreContext);
  if (!context) {
    throw new Error('useScores must be used within a ScoreProvider');
  }
  return context;
};
