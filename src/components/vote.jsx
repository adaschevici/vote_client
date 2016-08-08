import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export class Vote extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
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
        {this.pair.map((entry) =>
          <button disabled={this.isDisabled}
            key={entry}
            onClick={() => this.props.vote(entry)}
          >
            <h1>{entry}</h1>
            {this.hasVotedFor(entry) ?
              <div className="label">{'Voted'}</div> :
              null}
          </button>
        )}
      </div>
    );
  }

}

Vote.propTypes = {
  pair: React.PropTypes.array,
  hasVoted: React.PropTypes.string,
  vote: React.PropTypes.func,
};
