import React                    from 'react';
import { Alert }                from 'react-bootstrap';
import { Link, browserHistory } from 'react-router';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import Score                    from './Score.jsx';
import Board                    from './Board.jsx';
import request                  from 'axios';
import setUserAction            from '../actions/setUser';

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
        this.props.setUserAction(this.textInput.value);
      })
      .catch((err) =>{
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        <h2>My UserName is: {this.props.userState.username}</h2>
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

const mapStateToProps = (state) =>{
  return {
    userState: state.userState
  };
}

export default connect(mapStateToProps, 
  { 
    setUserAction: setUserAction 
  }
)(App);
