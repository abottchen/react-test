import React, { Component } from 'react';

class Main extends Component {
  constructor(props) {
    super(props);
    {/* Binds 'this' to the component state rather than the local variable scope */}
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: 'input text' };
  }

  handleChange(e) {
    this.setState({ value: e.target.value })
  }

  getPlayer() {
    return this.state.value;
  }

  render() {
    return (
        <div className="main">
          <div className="panel">
            <h3>Input</h3>
            <textarea
              style={{width: "100%", hieght: "100%"}}
              onChange={this.handleChange}
              defaultValue={this.state.value}/>
          </div>
          <div className="panel">
            <h3>Output</h3>
            <div
              style={{width: "100%", height: "100%", fontFamily: "monospace"}}
              className="player-output">
                {this.getPlayer()}
              </div>
          </div>
        </div>
    );
  }
}

export default Main;
