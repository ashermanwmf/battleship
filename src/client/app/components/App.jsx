import React from 'react';
import { Alert } from 'react-bootstrap';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Score from '../containers/Score.jsx';
import Board from '../containers/Board.jsx';
import request from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  resetGame() {
    request.get('/api/resetUsers')
      .then((response) =>{
        console.log(response);
      })
      .catch((err) =>{
        console.log(err);
      });
  }
  setUser() {
    request.get(`/api/setUser/${this.textInput.value}`)
      .then((response) =>{
        console.log(response);
      })
      .catch((err) =>{
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        <input type="text" name="username" ref={(input) =>{ this.textInput = input }}/>
        <button onClick={this.setUser.bind(this)}>Submit</button>
        <Score 
          reset={false}
        />
        <Board 
          reset={false}
        />
      </div>
    );
  }
}


export default App;