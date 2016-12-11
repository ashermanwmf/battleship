import React                    from 'react';
import { Alert }                from 'react-bootstrap';
import { Link, browserHistory } from 'react-router';
import { connect }              from 'react-redux';
import { bindActionCreators }   from 'redux';
import request                  from 'axios';

export class Score extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
       <div className="score">
        <div className="userScore">
          <h3>User 1: {this.props.score.user1} shippes sunk</h3>
        </div>
        <div className="userScore">
          <h3>User 2: {this.props.score.user2} shippes sunk</h3>
        </div>
        <div className="key">
          <div className='on'>ship</div>
          <div className='off'>no ship</div>
          <div className='hit'>hit</div>
          <div className='miss'>miss</div>
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