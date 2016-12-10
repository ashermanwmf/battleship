import React                    from 'react';
import { Alert }                from 'react-bootstrap';
import { Link, browserHistory } from 'react-router';
import { connect }              from 'react-redux';
import { bindActionCreators }   from 'redux';
import Score                    from './Score.jsx';
import Board                    from './Board.jsx';
import request                  from 'axios';
import setUserAction            from '../actions/setUser';
import setBoardAction           from '../actions/setBoard';
import changeTurnAction         from '../actions/changeTurn';
import toggleBlockAction        from '../actions/toggleBlock';
import data                     from '../board.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    socket.on('UPDATE_BOARDS', (data) =>{
      console.log('this is the socket emission on toggle', data);
      // i need to check which user is on this socket, if it is the user 
      //that clicked then update their second board not the board with pieces
      if(data.user === this.props.userState.username){
        //this is the user that clicked and their click board should be updated
        let className = data.move === 'sunk' ? 'hit' : data.move;
        this.props.toggleBlockAction(data.index, this.props.clickBoard, className);
      }else {
        //this is the user who is not clicked and they should take the data board and set it to new board
        this.props.setBoardAction(data.boardToToggle);
      }

      console.log('inside app before change turn', this.props.userState);
      this.props.changeTurnAction(this.props.userState.username, !this.props.userState.turn);
      //if user name is user2 then set the turn to the correct user which is user 1
    });
  }
  resetGame() {
    request.get('/api/resetGame')
      .then((response) =>{
        console.log(response);
        this.props.setBoardAction(data);
        this.props.setUserAction({
          userName: '',
          turn: false
        });
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
    toggleBlockAction: toggleBlockAction
  }
)(App);
