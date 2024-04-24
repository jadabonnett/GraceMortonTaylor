import './App.css';
import QuestionCounter from './QuestionCounter';
import ScrollingTable from './ScorecardScroll';
import './setup.js'

function App() {
   
  return (
    <div className="App">
      < QuestionCounter />
      <div className="scorecard" >
        < ScrollingTable />
      </div>
    </div>
  );
}

 export default App;
