import React, { useRef } from 'react';
import './ScorecardScroll.css'; // Import CSS file for styling
import ScorecardColumn from './ScorecardColumn';

export default function ScrollingTable() {
    return (
        <div className="horizontal-scroll-container">
            <table className="horizontal-scroll-content">
                <tr>
                    <td>< ScorecardColumn /></td>
                    <td>< ScorecardColumn /></td>
                    <td>< ScorecardColumn /></td>
                    <td>< ScorecardColumn /></td>
                    <td>< ScorecardColumn /></td>
                    <td>< ScorecardColumn /></td>
                    <td>< ScorecardColumn /></td>
                    <td>< ScorecardColumn /></td>
                    <td>< ScorecardColumn /></td>
                    <td>< ScorecardColumn /></td>
                    <td>< ScorecardColumn /></td>
                    <td>< ScorecardColumn /></td>
                    <td>< ScorecardColumn /></td>
                    <td>< ScorecardColumn /></td>
                    <td>< ScorecardColumn /></td>
                </tr>
            </table>
        </div>
    );
}
