import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import increment from './actions';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  handleClick(int) {
    this.props.plus(parseInt(int, 0));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React { this.props.counter }</h1>
        </header>
        <button onClick={() => this.handleClick(2) } >CLick!</button>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    counter: state.counter
});

const mapDispatchToProps = dispatch => ({
  plus : bindActionCreators(increment, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
