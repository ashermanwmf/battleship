import React                    from 'react';
import { Alert }                from 'react-bootstrap';
import { Link, browserHistory } from 'react-router';
import { connect }              from 'react-redux';
import { bindActionCreators }   from 'redux';
import Row                      from '../components/Row.jsx';
import request                  from 'axios';

export class Board extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let className = 'blankBoard';
    let board = this.props.clickBoard.board;
    let title = 'Other User Board (click when its your turn)';

    if(this.props.myboard){
      className = 'board';
      board = this.props.gameBoard.board;
      title = 'My Board';
    }

    return (
      <div className={className}>
        <h3>{title}</h3>
        {board.map((row, index) =>
          <Row 
            key={index} 
            rowIndex={index} 
            row={row} 
            myboard={this.props.myboard} 
            socket={this.props.socket}
          />
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) =>{
  return {
    gameBoard: state.gameBoard,
    clickBoard: state.clickBoard
  };
}

export default connect(mapStateToProps, {})(Board);
