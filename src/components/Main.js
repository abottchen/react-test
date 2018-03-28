import React, { Component } from 'react';

class Main extends Component {
  constructor(props) {
    super(props);
    {/* Binds 'this' to the component state rather than the local variable scope */}
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const name = event.target.value
    this.props.updatePlayer({
      name: name 
    });
  }

  getPlayer() {
    return this.props.player.name;
  }

  render() {
    return (
        <div className="main">
          <div className="panel">
            <h3>Input</h3>
            <textarea
              style={{width: "100%", hieght: "100%"}}
              onChange={this.handleChange}
              value={this.props.player.name}/>
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
