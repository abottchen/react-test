import React, { Component } from 'react';

class PlayerList extends Component {
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

  render() {
    return (
      <div className="panel">
        <h3>Update Block</h3>
        <textarea
          style={{width: "100%", hieght: "100%"}}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default PlayerList;
