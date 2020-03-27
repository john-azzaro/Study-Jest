import React, { Component } from 'react';
import './App.css';
import Messages from './Messages';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Snapshot and Smoke Test!</h1>
        <Messages name="Messages" unread={0}/>
        <Messages name="Notifications" unread={10}/>
      </div>
    );
  }
}

export default App;