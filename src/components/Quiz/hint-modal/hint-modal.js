import React, { Component } from 'react';
import { connect } from 'react-redux';

import './hint-modal.css';

class HintModal extends Component {

  render() {
    return (
      <div className="hint-modal-overlay" onClick={() => this.props.showHint(false)}>
        <div className="hint-modal" onClick={(e) => e.stopPropagation()}>
          <div className="hint-message">
            <p className="hint-text">You have {this.props.hints} HINTS left</p>
            <p className="hint-text">Are you sure you want to use it?</p>
          </div>
          <div className="buttons">
            <input className="button cancel-button" type="button"
              value="Cancel" onClick={() => this.props.showHint(false)} />
            <input className="button confirm-button" type="button"
              value="Confirm" onClick={() => this.props.fillAnswer()} />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => state.appState)(HintModal);
