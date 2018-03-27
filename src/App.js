import React, { Component } from 'react';
import './data/App.css';
import MainView from './components/views/MainView.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
          <MainView/>
      </MuiThemeProvider>
    );
  }
}

export default App;
