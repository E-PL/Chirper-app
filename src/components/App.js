import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import LoadingBar from 'react-redux-loading';
import Dashboard from './Dashboard';
import TweetPage from './TweetPage';
import NewTweet from './NewTweet';
class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div>
        <LoadingBar />
        {this.props.loading === true ? null : (
          <TweetPage match={{ params: { id: '8xf0y6ziyjabvozdd253nd' } }} />
        )}
      </div>
    );
  }
}

function mapStateToProps({ autheduser }) {
  return {
    loading: autheduser === null,
  };
}

export default connect(mapStateToProps)(App);
