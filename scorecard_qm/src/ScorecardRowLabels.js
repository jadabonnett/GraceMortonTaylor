import React from 'react';
import './App.css';

function RowLabels () {
  return (
    <div className="table-container">
    <table id="table_labels">
      <thead>
        <tr>
          <th>Question #</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Player Name</td>
        </tr>
        <tr>
          <td class="labels" >Type</td>
        </tr>
        <tr>
          <td class="labels">Name</td>
        </tr>
        <tr>
          <td class="labels">Points</td>
        </tr>
        <tr >
          <td class="labels">Bonus</td>
        </tr>
        <tr>
          <td class="labels">Errors</td>
        </tr>
        <tr >
          <td class="labels">Total</td>
        </tr>
      </tbody>
    </table>
  </div>

  );
}

export default RowLabels;