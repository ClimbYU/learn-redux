import React, { Component } from 'react';
import {connect} from 'react-redux' 
import {addBook, removeBook, getBookAsync} from './actions'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h2>我现在有{this.props.num}本书，小明有{this.props.anotherNum}本书</h2>
        <button onClick={this.props.addBook}>我向小明借一本</button>
        <br/>
        <button onClick={this.props.removeBook}>小明向我借一本</button>
        <br/>
        <button onClick={this.props.getBookAsync}>小明过两天借我一本</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    num:state.num,
    anotherNum:state.anotherNum
})

const mapDispatchToProps = {addBook, removeBook, getBookAsync}

export default connect(mapStateToProps, mapDispatchToProps)(App);
