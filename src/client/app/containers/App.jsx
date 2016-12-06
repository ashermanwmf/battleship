import React from 'react';
import { Alert } from 'react-bootstrap';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Board from './components/Board.jsx';
import request from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>

        <Board 
          reset={false}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    score: state.score
  };
}

export default connect(mapStateToProps, {})(App);