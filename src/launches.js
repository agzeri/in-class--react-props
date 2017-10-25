import React, { Component } from 'react';

import IndividualLaunche from './IndividualLaunche';

class Launches extends Component {
  renderIndividualLaunches() {
    var allLaunches = this.props.list.map(function(obj) {
      return <IndividualLaunche vehicle={obj.vehicle} date={obj.date} />
    });

    return allLaunches
  }

  render() {
    return (
      <div>
        {this.renderIndividualLaunches()}
      </div>
    )
  }
}

export default Launches;
