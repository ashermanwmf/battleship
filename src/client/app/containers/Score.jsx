import React from 'react';
import { Alert } from 'react-bootstrap';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import request from 'axios';

class Score extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
       <div className="score">
        <div className="userScore">
          User 1: 0 shippes sunk
        </div>
        <div className="userScore">
          User 2: 0 shippes sunk
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    score: state.score
  };
}

export default connect(mapStateToProps, {})(Score);