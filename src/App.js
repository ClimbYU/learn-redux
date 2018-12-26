import React, { Component } from 'react';
// import {connect} from 'react-redux' 
import Library from './components/library'
import Bob from './components/bob'
import Mary from './components/mary'
import './App.css';
// import Test from './test'

export default class App extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        {/* <Test/> */}
        <Library />
        <Bob />
        <Mary />
      </div>
    );
  }
}