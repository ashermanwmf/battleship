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
import data                     from '../board.json';

class App extends React.Component {
  constructor(props) {
    super(props);
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
        <h2>My UserName is: {this.props.userState.userName} and it is {turn}</h2>
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
    userState: state.userState
  };
}

export default connect(mapStateToProps, 
  { 
    setUserAction: setUserAction,
    setBoardAction: setBoardAction 
  }
)(App);
