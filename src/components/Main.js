import React, { Component } from 'react';
import Block from './Block';
import PlayerList from './PlayerList';

class Main extends Component {
  render() {
    return (
        <div className="main">
          <Block globalState={this.props.globalState} updateGlobalState={this.props.updateGlobalState}/>
          <PlayerList globalState={this.props.globalState} updateGlobalState={this.props.updateGlobalState}/>
        </div>
    );
  }
}

export default Main;
