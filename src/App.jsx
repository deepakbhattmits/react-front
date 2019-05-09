import React, { Component } from 'react';
// import logo from '../src/assets/images/logo.svg';

import Header from '../src/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 

class App extends Component {
  render() {
    return (
      <Header />
      // <div className="App">
      //   <header className="App-header">
      //     {/* <img src={logo} className="App-logo" alt="logo" /> */}
      //   </header>
      // </div>
    );
  }
}

export default App;
