import React from 'react';

export class Voting extends React.Component {
  constructor(props) {
    super(props);
  }

  get pair() {
    return this.props.pair || [];
  }

  get isDisabled() {
    return !!this.props.hasVoted;
  }

  get hasVotedFor(entry) {
    return this.props.hasVoted === entry;
  }

  render() {
    return (
      <div className="voting">
        {this.pair.map((entry) =>
          <button key={entry}
            disabled={this.isDisabled}
            onClick={() => this.props.vote(entry)}
          >
            <h1>{entry}</h1>
            {this.hasVotedFor(entry) ? <div className="label">Voted</div> : null}
          </button>
        )}
      </div>
    );
  }
};

Voting.propTypes = {
  pair: React.PropTypes.array,
  vote: React.PropTypes.func,
  hasVoted: React.bool,
};
