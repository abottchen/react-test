import React, { Component } from 'react';

class Block extends Component {
  getonBlock() {
    return this.props.globalState.onBlock;
  }

  render() {
    return (
        <div className="main">
          <h3>On Block</h3>
          <div
            style={{width: "100%", height: "100%", fontFamily: "monospace"}}
            className="onblock-output">
              {this.getonBlock()}
            </div>
        </div>
    );
  }
}

export default Block;
