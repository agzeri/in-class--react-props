import React, { Component } from 'react';
import Launches from './launches.js';
import IndividualLaunche from './IndividualLaunche.js';

class App extends Component {
  render() {

    var astrosList = this.props.astros.map(function(obj) {
      return <li>{obj.name}</li>
    });

    return (
      <div id="app-container">
        <h2>Bros In Universe</h2>
        <ul>
          {astrosList}
        </ul>
        <hr/>
        <Launches list={this.props.launches} />
        <IndividualLaunche vehicle={"Ferrari 458"} date={"25 Dec, 2017"} />
      </div>
    );
  }
}

export default App;
