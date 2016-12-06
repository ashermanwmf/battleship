import React                    from 'react';
import { Alert }                from 'react-bootstrap';
import { Link, browserHistory } from 'react-router';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import Block                    from './Block.jsx';
import request                  from 'axios';

class Board extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={this.props.block.class}></div>
    );
  }
}

export default Board;
