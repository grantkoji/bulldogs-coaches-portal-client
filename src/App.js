import logo from './logo.svg';
import './App.css';
import Login from './pages/Auth/Login'
import React, {useState, useEffect} from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
// import * as requests from './requests'
// import * as action from './modules/actionCreators/actionCreators'
import {connect} from 'react-redux'

function App() {
  return (
    <div className="App">
       <h1>
        Bulldogs Development Portal 
      </h1>
      <div>
      <h2>
        Sign in:
      </h2>
        <Login />
      </div>    
    </div>
  );
}

export default App;
