import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

class App extends Component {
  constructor() {
    super();
    this.updateGlobalState = this.updateGlobalState.bind(this);
    this.state = {
      globalState: { 
        onBlock: "Someone" 
      }
    };
  }

  updateGlobalState(globalState) {
    this.setState({globalState: globalState});
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="workspace">
          <Main globalState={this.state.globalState} updateGlobalState={this.updateGlobalState}/>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
