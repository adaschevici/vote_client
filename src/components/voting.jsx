import React from 'react';
import Winner from './winner';
import Vote from './vote';

export class Voting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.winner ?
          <Winner ref="winner" winner={this.props.winner} /> :
          <Vote {...this.props} />}
      </div>
    );
  }
}

Voting.propTypes = {
  winner: React.PropTypes.bool,
};
