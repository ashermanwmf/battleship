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
      <div className="row">
        {this.props.row.map((block, index) =>
          <Block 
            key={[this.props.rowIndex, index]} 
            fullIndex={[this.props.rowIndex, index]} 
            block={block} 
          />
        )}
      </div>
    );
  }
}

export default Board;
