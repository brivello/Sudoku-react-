import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  constructor(props){
    super(props);
    this.state={
      className:"square",
    };
  }
  handleChange(event){
    //this.props.validChange(this);
    this.props.onChange(event,this.props.value,this);
    //console.log(this);
  }
  render() {
    //console.log(this.props.value);
    if(this.props.value==null){
      return (
  	  <input 
        className={this.state.className} 
        onChange={this.handleChange.bind(this)} 
        value={this.props.InitialValue}>
  	  </input>
      );
    } else {
        return(
        <div className="puzzle-square" onClick={() => this.props.onClick()}>
          {this.props.value}
        </div>
        /*(event) => this.props.onClick(event)}>
          {this.props.value}*/
        );
    }
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
	handleChange(i,j,v,child){
    var valid=true;
		var squares = this.state.squares.slice();
		squares[i][j] = parseInt(v);
    //checks colums for same value
		for (var col=0; col<9; col++){
			if (col===i){
        /*these were set up as if/else to test the if case. Should be changed
         to one statement.*/
			} else if (parseInt(v)===squares[col][j]){
				console.log("same col");
        valid=false
			}
		}
    //checks rows for same value
    for (var row=0; row<9; row++){
      if (row===j){
      } else if (parseInt(v)===squares[i][row]){
        console.log("same row");
        valid=false;
      }
    }
    //checks box for same value
    row=Math.floor(i/3);
    col=Math.floor(j/3);
    for(var p=row*3; p<(row*3)+3; p++){
      for(var q=col*3; q<(col*3)+3; q++){
        if(p==i && q==j){
        } else if (squares[p][q]!=null && parseInt(v)===squares[p][q]){
          console.log("same box");
          valid=false;
        }
      }
    }
    if (parseInt(v)>9){
      valid=false;
    }
    if (valid==false){
      child.setState({className:"red-square"});
    } else {
      child.setState({className:"square"});
    }
    

		//this.setState({squares: squares});
		//console.log(this.state.squares);
	}
  validChange(child){
    console.log(child);
    child.setState({className:"red-square"})
  }
	renderSquare(i,j,initialValue) {
    if (initialValue!==null){
      this.state.squares[i][j]=initialValue;
    }
    return (
      <Square
        //value={this.state.squares[i][j]}
        key={i+""+j}
        validChange={this.validChange.bind(this)}
        ref ={i+""+j}
        value={initialValue}
        onChange={(event,value,child) => this.handleChange(i,j,event.target.value,child)}
        onClick= {() => alert("this is a part of the puzzle")}
      />
    );
  }


  render() {
    const status = 'Sudoku: Click a box to make a move';
	
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0,0)}
          {this.renderSquare(0,1,2)}
          {this.renderSquare(0,2)}
		      {this.renderSquare(0,3)}
          {this.renderSquare(0,4,3)}
          {this.renderSquare(0,5,8)}
		      {this.renderSquare(0,6,1)}
          {this.renderSquare(0,7,9)}
          {this.renderSquare(0,8)}
		  
        </div>
        <div className="board-row">
          {this.renderSquare(1,0)}
          {this.renderSquare(1,1,5)}
          {this.renderSquare(1,2)}
          {this.renderSquare(1,3,)}
          {this.renderSquare(1,4,7)}
          {this.renderSquare(1,5)}
          {this.renderSquare(1,6)}
          {this.renderSquare(1,7,8)}
          {this.renderSquare(1,8,6)}
        </div>
        <div className="board-row">
          {this.renderSquare(2,0)}
          {this.renderSquare(2,1,8)}
          {this.renderSquare(2,2,7)}
          {this.renderSquare(2,3,9)}
          {this.renderSquare(2,4,1)}
          {this.renderSquare(2,5)}
          {this.renderSquare(2,6,2)}
          {this.renderSquare(2,7)}
          {this.renderSquare(2,8)}
        </div>
		<div className="board-row">
          {this.renderSquare(3,0,5)}
          {this.renderSquare(3,1)}
          {this.renderSquare(3,2)}
          {this.renderSquare(3,3,7)}
          {this.renderSquare(3,4)}
          {this.renderSquare(3,5)}
          {this.renderSquare(3,6,6)}
          {this.renderSquare(3,7,2)}
          {this.renderSquare(3,8)}
		  
        </div>
        <div className="board-row">
          {this.renderSquare(4,0)}
          {this.renderSquare(4,1)}
          {this.renderSquare(4,2)}
          {this.renderSquare(4,3)}
          {this.renderSquare(4,4)}
          {this.renderSquare(4,5,5)}
          {this.renderSquare(4,6)}
          {this.renderSquare(4,7,1)}
          {this.renderSquare(4,8,8)}
        </div>
        <div className="board-row">
          {this.renderSquare(5,0,6)}
          {this.renderSquare(5,1,4)}
          {this.renderSquare(5,2,3)}
          {this.renderSquare(5,3)}
          {this.renderSquare(5,4)}
          {this.renderSquare(5,5)}
          {this.renderSquare(5,6,9)}
          {this.renderSquare(5,7)}
          {this.renderSquare(5,8)}
        </div>
		<div className="board-row">
          {this.renderSquare(6,0)}
          {this.renderSquare(6,1)}
          {this.renderSquare(6,2,9)}
          {this.renderSquare(6,3,4)}
          {this.renderSquare(6,4)}
          {this.renderSquare(6,5,1)}
          {this.renderSquare(6,6)}
          {this.renderSquare(6,7,3)}
          {this.renderSquare(6,8)}
		  
        </div>
        <div className="board-row">
          {this.renderSquare(7,0,1)}
          {this.renderSquare(7,1,7)}
          {this.renderSquare(7,2,4)}
          {this.renderSquare(7,3,8)}
          {this.renderSquare(7,4)}
          {this.renderSquare(7,5)}
          {this.renderSquare(7,6)}
          {this.renderSquare(7,7)}
          {this.renderSquare(7,8)}
        </div>
        <div className="board-row">
          {this.renderSquare(8,0)}
          {this.renderSquare(8,1)}
          {this.renderSquare(8,2,5)}
          {this.renderSquare(8,3,6)}
          {this.renderSquare(8,4,9)}
          {this.renderSquare(8,5)}
          {this.renderSquare(8,6,8)}
          {this.renderSquare(8,7)}
          {this.renderSquare(8,8,1)}
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
