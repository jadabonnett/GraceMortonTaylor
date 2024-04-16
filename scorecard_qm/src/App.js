import './App.css';
import QuestionCounter from './QuestionCounter';
import RowLabels from './ScorecardRowLabels';
import ScrollingTable from './ScorecardScroll';
import './setup.js'

function App() {
   
  return (
    <div className="App">
      < QuestionCounter />
      <div className="scorecard">
        < RowLabels />
        < ScrollingTable />
      </div>
    </div>
  );
}

 export default App;
