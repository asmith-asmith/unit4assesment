import React, { Component } from 'react';
import './App.css';
import Circles from './components/Circles/Circles'
import CircleSelector from './components/CircleSelector/CircleSelector'


class App extends Component {
  state = {
    selected: 1
  }
  handleClick = clicked => {
    this.setState({selected: clicked})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector handleClick={this.handleClick} selected={this.state.selected}/>
          <Circles selected={this.state.selected}/>
        </main>
      </div>
    );
  }
}

export default App;
