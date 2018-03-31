import React, { Component } from 'react';
import './PlayerList.css'

class PlayerList extends Component {
  constructor(props) {
    super(props);
    /* Binds 'this' to the component state rather than the local variable scope */
    this.onPlayerSelect = this.onPlayerSelect.bind(this);
  }

  onPlayerSelect(player) {
    this.props.updateGlobalState({
      onBlock: player 
    });
  }

  render() {
    const playerList = [
      'Brown, Antonio',
      'Allen, Keenan',
      'Hill, Tyreek',
      'Hunt, Kareem',
      'Mahomes, Patrick',
      'Goff, Jared',
      'McCoy, LeSean',
      'Jones, Julio',
      'Olsen, Greg',
      'Butker, Harrison',
      'Shepard, Sterling',
      'McKinnon, Jerick',
      'Henry, Derrick',
      'Doyle, Jack',
      'Williams, Jamaal',
      'Lewis, Dion'
    ];
    return (
      <div className="panel">
        <h3>Players</h3>
        <div className="player-list-div">
          <ul className="player-list">
              {
                playerList.map((player,index) => {
                  return <li className="player" key={ index } onClick={ this.onPlayerSelect.bind(this, player) } >{ player }</li>;
                })
              }
          </ul>
        </div>
      </div>
    );
  }
}

export default PlayerList;
