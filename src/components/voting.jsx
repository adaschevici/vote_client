import React from 'react';

export class Voting extends React.Component {
  constructor(props) {
    super(props);
    this._onClick = () => this.props.vote;
  }

  get pair() {
    return this.props.pair || [];
  }

  get isDisabled() {
    return !!this.props.hasVoted;
  }

  hasVotedFor(entry) {
    return this.props.hasVoted === entry;
  }

  render() {
    return (
      <div className="voting">
        {this.props.winner ?
          <div ref="winner">{'Winner is '} {this.props.winner}</div> :
          this.pair.map((entry) =>
            <button
              disabled={this.isDisabled}
              key={entry}
              onClick={this._onClick(entry)}
            >
              <h1>{entry}</h1>
              {this.hasVotedFor(entry) ? <div className="label">{'Voted'}</div> : null}
            </button>
          )
        }
      </div>
    );
  }
}

Voting.propTypes = {
  winner: React.PropTypes.bool,
  pair: React.PropTypes.array,
  vote: React.PropTypes.func,
  hasVoted: React.bool,
};
