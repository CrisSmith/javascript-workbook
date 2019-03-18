import React, { Component } from 'react';
import Square from './Square';

/* seprate components for Board and Square*/
/* followed along from React's Tic-tac-toe tutorial*/

export class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares:
            [null,null,null,
            null,null,null,
            null,null,null],

            xTurn: true,   
        }      
    }
    handleClick(i) {
        let newSquares = this.state.squares.slice();

        if (calculateWinner(newSquares) || newSquares[i]) {
            return;
          }
        newSquares[i] = this.state.xTurn == true ? "X" : "O"
        this.setState({ 
            squares : newSquares,
            xTurn: !this.state.xTurn
        })
    }
    /*Using a function in to render multiple Square components*/
    renderSquare(i){
        return (
        <Square value={this.state.squares[i]} onClick={()=>this.handleClick(i)} />
        )
    }
    render() {
        let winner= calculateWinner(this.state.squares);
        let status;
            if(winner) {
            status= "We have a Winner!! Winner:" + winner;
            }
            else {
            status= "Next Player:" + (this.state.xTurn ? 'X' : 'O');
            }
        
        return(
             <div>
                 <div className="board-row">
                    <div>{this.renderSquare(0)}</div>
                    <div>{this.renderSquare(1)}</div>
                    <div>{this.renderSquare(2)}</div>
                </div>
                <div className="board-row">
                    <div>{this.renderSquare(3)}</div>
                    <div>{this.renderSquare(4)}</div>
                    <div>{this.renderSquare(5)}</div>
                </div>
                <div className="board-row">
                    <div>{this.renderSquare(6)}</div>
                    <div>{this.renderSquare(7)}</div>
                    <div>{this.renderSquare(8)}</div>
                </div>
                <div className="status-bar">{status}</div>
            </div>            
        )
    }    
}

/* -calculateWinner is comparing the values of [a] , [b] , and [c] to see if they are all 'X''s or all 'O''s;
-return squares[a] can only be 'X' or 'O' after passing the if statement
-The squares[a] is by itself because it is is checking if there is a value in that particular square('truthy') and the remainder of the condition makes sure they are all the same type (either X or O */
function calculateWinner(squares) {
    let lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      let [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }


export default Board
