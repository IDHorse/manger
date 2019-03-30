import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';

const mapStateToProps = function(state){
  return {
    num: state.counter.num
  }
}
@connect(mapStateToProps)
class App extends Component {
  render() {
    return (
      <div className="App">
        this is app {this.props.num}
      </div>
    );
  }
}

export default App;
