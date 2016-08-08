import React from 'react';

export class Winner extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="winner">
        {'Winner is '}{this.props.winner}{'!'}
      </div>
    );
  }
}

Winner.propTypes = {
  winner: React.PropTypes.bool,
};
