import React, { Component } from 'react';
// import {connect} from 'react-redux' 
import Library from './library'
import Bob from './bob'
import Mary from './mary'
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div style={{textAlign:'center'}}>
        <Library/>
        <Bob/>
        <Mary/>
      </div>
    );
  }
}