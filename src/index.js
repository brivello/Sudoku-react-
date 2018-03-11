import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  render() {
    return (
	  <input className="square" onChange={(event) => this.props.onChange(event)}>
        {this.props.value}
	  </input>
      /*<button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>*/
    );
  }
}

class Board extends React.Component {
	constructor(props){
		var board= new Array(9);
		for (var i=0; i<9; i++){
			board[i]=new Array(9).fill(null);
		}
		super(props);
		this.state={
			squares: board,
		};
	}
	handleChange(i,j,v){
		var squares = this.state.squares.slice();
		squares[i][j] = parseInt(v);
		console.log(this.state.squares);
		//this.setState({squares: squares});
		//console.log(this.state.squares);
	}
	renderSquare(i,j) {
    return (
      <Square
        value={this.state.squares[i][j]}
        onChange={(event) => this.handleChange(i,j,event.target.value)}
      />
    );
  }


  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0,0)}
          {this.renderSquare(0,1)}
          {this.renderSquare(0,2)}
		  {this.renderSquare(1,0)}
          {this.renderSquare(1,1)}
          {this.renderSquare(1,2)}
		  {this.renderSquare(2,0)}
          {this.renderSquare(2,1)}
          {this.renderSquare(2,2)}
		  
        </div>
        <div className="board-row">
          {this.renderSquare(0,3)}
          {this.renderSquare(0,4)}
          {this.renderSquare(0,5)}
		  {this.renderSquare(1,3)}
          {this.renderSquare(1,4)}
          {this.renderSquare(1,5)}
		  {this.renderSquare(2,3)}
          {this.renderSquare(2,4)}
          {this.renderSquare(2,5)}
        </div>
        <div className="board-row">
          {this.renderSquare(0,6)}
          {this.renderSquare(0,7)}
          {this.renderSquare(0,8)}
		  {this.renderSquare(1,6)}
          {this.renderSquare(1,7)}
          {this.renderSquare(1,8)}
		  {this.renderSquare(2,6)}
          {this.renderSquare(2,7)}
          {this.renderSquare(2,8)}
        </div>
		<div className="board-row">
          {this.renderSquare(3,0)}
          {this.renderSquare(3,1)}
          {this.renderSquare(3,2)}
		  {this.renderSquare(4,0)}
          {this.renderSquare(4,1)}
          {this.renderSquare(4,2)}
		  {this.renderSquare(5,0)}
          {this.renderSquare(5,1)}
          {this.renderSquare(5,2)}
		  
        </div>
        <div className="board-row">
          {this.renderSquare(3,3)}
          {this.renderSquare(3,4)}
          {this.renderSquare(3,5)}
		  {this.renderSquare(4,3)}
          {this.renderSquare(4,4)}
          {this.renderSquare(4,5)}
		  {this.renderSquare(5,3)}
          {this.renderSquare(5,4)}
          {this.renderSquare(5,5)}
        </div>
        <div className="board-row">
          {this.renderSquare(3,6)}
          {this.renderSquare(3,7)}
          {this.renderSquare(3,8)}
		  {this.renderSquare(4,6)}
          {this.renderSquare(4,7)}
          {this.renderSquare(4,8)}
		  {this.renderSquare(5,6)}
          {this.renderSquare(5,7)}
          {this.renderSquare(5,8)}
        </div>
		<div className="board-row">
          {this.renderSquare(6,0)}
          {this.renderSquare(6,1)}
          {this.renderSquare(6,2)}
		  {this.renderSquare(7,0)}
          {this.renderSquare(7,1)}
          {this.renderSquare(7,2)}
		  {this.renderSquare(8,0)}
          {this.renderSquare(8,1)}
          {this.renderSquare(8,2)}
		  
        </div>
        <div className="board-row">
          {this.renderSquare(6,3)}
          {this.renderSquare(6,4)}
          {this.renderSquare(6,5)}
		  {this.renderSquare(7,3)}
          {this.renderSquare(7,4)}
          {this.renderSquare(7,5)}
		  {this.renderSquare(8,3)}
          {this.renderSquare(8,4)}
          {this.renderSquare(8,5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6,6)}
          {this.renderSquare(6,7)}
          {this.renderSquare(6,8)}
		  {this.renderSquare(7,6)}
          {this.renderSquare(7,7)}
          {this.renderSquare(7,8)}
		  {this.renderSquare(8,6)}
          {this.renderSquare(8,7)}
          {this.renderSquare(8,8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
