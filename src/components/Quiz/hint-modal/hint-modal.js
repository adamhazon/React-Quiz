import React, { Component } from 'react';
import { connect } from 'react-redux';

import './hint-modal.css';

import { AppStoreActions } from '../../../redux/app-store';

class HintModal extends Component {

  useHint = () => {
    this.props.fillAnswer();
    this.props.dispatch(AppStoreActions.removeHint());
  }

  render() {
    return (
      <div className="hint-modal-overlay" onClick={() => this.props.showHint(false)}>
        <div className="hint-modal" onClick={(e) => e.stopPropagation()}>
          {this.props.hints ?
            <div className="hint-message">
              <p className="hint-text">You have {this.props.hints} hints left</p>
              <p className="hint-text">Are you sure you want to use it?</p>
            </div>
          :
            <div className="hint-message">
              <p className="hint-text">No hints left</p>
            </div>
          }
          <div className="buttons">
            <input className="button cancel-button" type="button"
              value="Cancel" onClick={() => this.props.showHint(false)} />
            {!!this.props.hints &&
              <input className="button confirm-button" type="button"
                value="Confirm" onClick={() => this.useHint()} />}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => state.appState)(HintModal);
