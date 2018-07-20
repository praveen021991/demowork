import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Player from './Player/Player';
import Game from './Player/Game';
import Person from './Player/Person';

class App extends Component {
  state = {
     game: [
       {name: "football", players: 11},
       {name: "volleyball", players: 6}
     ],
     willNotChange: true
  }

  onChangeHandler = (event) => {
      this.setState({
        game: [
          {name: event.target.value, players: 11},
          {name: "volleyball", players: 6}
        ]
      });
      //this.state.game[0].name = event.target.value;
      //somemethod();
      //console.log('inside onChangeHamdler: '+ this.state.game[0].name);
  }
  // somemethod = () => {
  //   this.setState({
  //     willNotChange: false,
  //     newProp: 0
  //   });
  // }
 
shouldComponentUpdate(nextProps, nextState){
    console.log(nextProps, nextState, "In App's shouldComponentUpdate");
    return true;
}
componentWillUpdate(nextProps, nextState){
    console.log("In App's componentWillUpdate");
}
componentDidUpdate(prevProps, prevState){
    console.log(prevProps, prevState, "In App's componentDidUpdate");
}
  render() {

    console.log("inside app js render");
   
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Person testProp="Samad" />
        <Person />
        <Player name="Unni" age="23"/>
        <Player name="Samad" age="25"/>
        <Game name={this.state.game[0].name} 
              players={this.state.game[0].players} 
              change={this.onChangeHandler}/>
      </div>
    );
  }
}

export default App;
