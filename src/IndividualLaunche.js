import React, { Component } from 'react';

class IndividualLaunche extends Component {
  render() {
    return (
      <div>
        <p>{this.props.vehicle}</p>
        <time>{this.props.date}</time>
      </div>
    )
  }
}

export default IndividualLaunche;
