import React, { Component } from 'react';

import { connect } from 'react-redux';

import { getRepos, addRepos } from './redux';

// App.js
export class App extends Component {

  componentDidMount() {
    this.updateRepoList();
  }

  updateRepoList = () => {
    console.log(this.props);
    this.props.getRepos();
  }

  render() {
    return (
      <div>
        <h1>Thunk redux testing</h1>

        <ul>
          {/* {this.props.repos.map((repo, index) => (
            <li key={index}>
              <a href={repo.html_url} target="_blank">
                {repo.name}
              </a>
            </li>
          ))} */}
        </ul>
      </div>
    );
  }
}

// AppContainer.js
const mapStateToProps = (state, ownProps) => ({ repos: state.repos });
const mapDispatchToProps = { getRepos, addRepos };
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
