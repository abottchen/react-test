import React, { Component } from 'react';
import './PlayerList.css'

class PlayerList extends Component {
  constructor(props) {
    super(props);
    /* Binds 'this' to the component state rather than the local variable scope */
    this.onPlayerSelect = this.onPlayerSelect.bind(this);
    this.classflip = "player";
  }

  onPlayerSelect(player) {
    this.props.updateGlobalState({
      onBlock: player 
    });
  }

  render() {
    let playerList = [
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
    playerList.sort()
    return (
      <div className="panel">
        <h3>Players</h3>
        <div className="player-list-div">
          <ul className="player-list">
              {
                playerList.map((player,index) => {
                  this.classflip === "player" ? this.classflip = "player-odd" : this.classflip = "player";
                  return (
                    <li 
                        className={ this.classflip } 
                        key={ index } 
                        onClick={ this.onPlayerSelect.bind(this, player) } 
                      > 
                      { player }
                    </li>
                  );
                })
              }
          </ul>
        </div>
      </div>
    );
  }
}

export default PlayerList;
