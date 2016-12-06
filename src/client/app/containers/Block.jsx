import React                    from 'react';
import { Alert }                from 'react-bootstrap';
import { Link, browserHistory } from 'react-router';
import { connect }              from 'react-redux';
import { bindActionCreators }   from 'redux';
import request                  from 'axios';
import setUserAction            from '../actions/setUser';
import setBoardAction           from '../actions/setBoard';


class Block extends React.Component {
  constructor(props) {
    super(props);
  }
  togglePiece() {
    console.log(this.props.myboard)
    if(!this.props.myboard){
      request.post('/api/makeMove', { index: this.props.finalIndex, username: this.props.userState.username })
        .then((respose) =>{
          console.log(response);
        })
        .catch((err) =>{
          console.log(err);
        });
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
