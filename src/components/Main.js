import React, { Component } from 'react';

class Main extends Component {
  constructor(props) {
    super(props);
    /* Binds 'this' to the component state rather than the local variable scope */
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const onBlock = event.target.value
    this.props.updateGlobalState({
      onBlock: onBlock 
    });
  }

  getonBlock() {
    return this.props.globalState.onBlock;
  }

  render() {
    return (
        <div className="main">
          <div className="panel">
            <h3>Update Block</h3>
            <textarea
              style={{width: "100%", hieght: "100%"}}
              onChange={this.handleChange}
              value={this.props.globalState.onBlock}/>
          </div>
          <div className="panel">
            <h3>On Block</h3>
            <div
              style={{width: "100%", height: "100%", fontFamily: "monospace"}}
              className="onblock-output">
                {this.getonBlock()}
              </div>
          </div>
        </div>
    );
  }
}

export default Main;
