import React                    from 'react';
import { Alert }                from 'react-bootstrap';
import { Link, browserHistory } from 'react-router';
import { connect }              from 'react-redux';
import { bindActionCreators }   from 'redux';
import request                  from 'axios';
import setUserAction            from '../actions/setUser';
import setBoardAction           from '../actions/setBoard';

socket.on('UPDATE_BOARDS', (data) =>{
  console.log('this is the socket emission on toggle', data);
});

class Block extends React.Component {
  constructor(props) {
    super(props);
  }
  togglePiece() {
    // change this to just sockets no request

    if(!this.props.myboard){
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
