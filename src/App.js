import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import { base } from './firebase';

class App extends Component {
  componentWillMount() {
    this.playerRef = base.syncState('player', {
        context: this,
        state: 'player'
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.playerRef);
  }

  onClick() {
    alert('Clicked');
  }

  render() {
    const list = [
      'Item 1',
      'Item 2',
      'Another Item',
    ];

    return (
      <div className="wrapper">
        <Header />
        <div className="workspace">
          <Main />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
