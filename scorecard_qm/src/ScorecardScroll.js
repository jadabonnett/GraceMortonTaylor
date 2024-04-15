import React, { useRef } from 'react';
import './ScorecardScroll.css'; // Import CSS file for styling
import ScorecardColumn from './ScorecardColumn';

const HorizontalScroll = () => {
const scrollRef = useRef(null);

const scrollLeft = () => {
if (scrollRef.current) {
scrollRef.current.scrollBy({
left: -100, // Adjust scroll distance as needed
behavior: 'smooth',
});
}
};

const scrollRight = () => {
if (scrollRef.current) {
scrollRef.current.scrollBy({
left: 100, // Adjust scroll distance as needed
behavior: 'smooth',
});
}
} 

};

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
