import React, { useRef } from 'react';
import './ScorecardScroll.css'; // Import CSS file for styling
import ScorecardColumn from './ScorecardColumn';

export default function ScrollingTable() {
    const numberOfColumns = 20;
    const columns = Array.from({ length: numberOfColumns }, (_, index) => index);

    return (
        <div className="horizontal-scroll-container">
            <table className="horizontal-scroll-content">
                <tr>
                    {columns.map((_, index) => (
                        <td key={index}>
                            <div className="question-number">Question {index + 1}</div>
                            <ScorecardColumn />
                        </td>
                        ))}
                </tr>
            </table>
        </div>
    );
}
