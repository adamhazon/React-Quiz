import React from 'react';
import './status-bar.css';

const StatusBar = (props) => {
  const { round, points, score, highScore } = props.state;

  return (
    <div className="status-bar">
      <span className="status-col">
        <span className="status-row">Round: </span>
        <span className="status-row">
          {Math.min(round, props.maxRounds)}/{props.maxRounds}
        </span>
      </span>
      <span className="status-col">
        <span className="status-row">Points: </span>
        <span className="status-row">{points.toLocaleString()}</span>
      </span>
      <span className="status-col">
        <span className="status-row">Score: </span>
        <span className="status-row">{score.toLocaleString()}</span>
      </span>
      <span className="status-col">
        <span className="status-row">High Score: </span>
        <span className="status-row">{highScore.toLocaleString()}</span>
      </span>
    </div>
  );
}

export default StatusBar;
