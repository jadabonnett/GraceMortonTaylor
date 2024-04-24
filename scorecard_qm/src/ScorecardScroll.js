import React, { useRef } from 'react';
import './ScorecardScroll.css'; // Import CSS file for styling
import ScorecardColumn from './ScorecardColumn';

export default function ScrollingTable() {
    const numberOfColumns = 20;
    const columns = Array.from({ length: numberOfColumns }, (_, index) => index);

    const containerRef = useRef(null);

    return (
        <div className="horizontal-scroll-container" id="horizontal-scroll-container" ref={containerRef}>
            <table className="horizontal-scroll-content" >
                <tr>
                    {columns.map((columnId, index) => (
                        <td key={index}>
                            <div className="question-number">Question {index + 1}</div>
                            <ScorecardColumn key={columnId+1} columnId={columnId+1}/>
                        </td>
                        ))}
                </tr>
            </table>
        </div>
    );
}
