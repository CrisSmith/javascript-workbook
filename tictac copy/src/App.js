import React, { Component } from 'react';
import Board from './Board';
import './App.css';

class App extends React.Component {
    render() {
      return(
     <div className="game">
          <h1>Tic-Tac-Toe:</h1>
        <div className="game-board">
           <Board />
        </div>
      </div>
    );
  }
}


export default App;


