import React                    from 'react';
import { Alert }                from 'react-bootstrap';
import { Link, browserHistory } from 'react-router';
import { connect }              from 'react-redux';
import { bindActionCreators }   from 'redux';
import request                  from 'axios';
import io                       from 'socket.io-client';
import setUserAction            from '../actions/setUser';
import setBoardAction           from '../actions/setBoard';

export class Block extends React.Component {
  constructor(props) {
    super(props);
  }
  togglePiece(e) {
    // change this to just sockets no request
    let socket = io(`http://localhost:3000`);

    if(!this.props.myboard && this.props.userState.turn && e.target.className === 'off'){
      const sendObj = {
        index: this.props.fullIndex, 
        username: this.props.userState.username
      };

      socket.emit('moveMade', sendObj);

    }
  }
  render() {
    return (
      <div className={this.props.block.class} onClick={this.togglePiece.bind(this)}></div>
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
)(Block);
