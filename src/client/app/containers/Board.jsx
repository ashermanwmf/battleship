import React from 'react';
import { Alert } from 'react-bootstrap';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Row from '../components/Row.jsx';
import request from 'axios';

class Board extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="board">
        {this.props.gameBoard.board.map((row, index) =>
          <Row key={index} rowIndex={index} row={row} />
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) =>{
  return {
    gameBoard: state.gameBoard
  };
}

export default connect(mapStateToProps, {})(Board);
