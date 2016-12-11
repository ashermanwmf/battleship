import React                    from 'react';
import { Alert }                from 'react-bootstrap';
import { Link, browserHistory } from 'react-router';
import { connect }              from 'react-redux';
import { bindActionCreators }   from 'redux';
import Score                    from './Score.jsx';
import Board                    from './Board.jsx';
import request                  from 'axios';
import io                       from 'socket.io-client';
import newBoard                 from '../createBoard';
import setUserAction            from '../actions/setUser';
import setBoardAction           from '../actions/setBoard';
import changeTurnAction         from '../actions/changeTurn';
import toggleBlockAction        from '../actions/toggleBlock';
import setScoreAction           from '../actions/setScore';
import resetBoardsAction        from '../actions/resetBoards';
import resetScoreAction         from '../actions/resetScore';

export class App extends React.Component {
  constructor(props) {
    super(props);
    let socket = io(`http://localhost:3000`);
    
    socket.on('UPDATE_BOARDS', (data) =>{
      //check which user and either toggle real board or click board

      if(data.move === 'win'){
        alert(`${data.user} won the game. Game now reseting.`);
        this.resetGame();
        return;
      }

      if(data.user === this.props.userState.username){
        let className = data.move === 'sunk' ? 'hit' : data.move;
        this.props.toggleBlockAction(data.index, this.props.clickBoard, className);
      }else {
        this.props.setBoardAction(data.boardToToggle);
      }

      //change whos turn it is
      this.props.changeTurnAction(this.props.userState.username, !this.props.userState.turn);
      this.props.setScoreAction(data.score);
    });

    // socket.on('RESET_GAME', () =>{
    //   alert('Game has been reset');
    //   this.props.resetBoardsAction(newBoard);
    //   this.props.setUserAction({
    //     userName: '',
    //     turn: false
    //   });
    //   this.props.resetScoreAction();
    // });
  }
  resetGame() {
    request.get('/api/resetGame')
      .then((response) =>{
        // socket.emit('resetGame');
        this.props.resetBoardsAction();
        this.props.setUserAction({
          userName: '',
          turn: false
        });
        this.props.resetScoreAction();
      })
      .catch((err) =>{
        console.log(err);
      });
  }
  setUser() {
    console.log(this.textInput.value);
    request.post('/api/setUser', {username: this.textInput.value})
      .then((response) =>{
        this.props.setUserAction(response.data);
        this.props.setBoardAction(response.data.board);
        this.textInput.value = '';
      })
      .catch((err) =>{
        console.log(err);
      });
  }
  render() {
    let turn = 'NOT my turn';

    if (this.props.userState.turn){
      turn = "my turn";
    }

    return (
      <div>
        <h2>My UserName is: {this.props.userState.username} and it is {turn}</h2>
        <button onClick={this.resetGame.bind(this)}>Reset</button>
        <input type="text" name="username" ref={(input) =>{ this.textInput = input }}/>
        <button onClick={this.setUser.bind(this)}>Submit</button>
        <Score 
          reset={false}
        />
        <Board 
          reset={false}
          myboard={true}
        />
        <Board 
          reset={false}
          myboard={false}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    userState: state.userState,
    clickBoard: state.clickBoard
  };
}

export default connect(mapStateToProps, 
  { 
    setUserAction: setUserAction,
    setBoardAction: setBoardAction,
    changeTurnAction: changeTurnAction,
    toggleBlockAction: toggleBlockAction,
    setScoreAction: setScoreAction,
    resetBoardsAction: resetBoardsAction,
    resetScoreAction: resetScoreAction
  }
)(App);
