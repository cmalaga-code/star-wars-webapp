import React, {Component} from 'react';
import Header from './Header';
import Body from './Body';
import './App.css';

// https://reactjs.org/docs/state-and-lifecycle.html

class App extends Component {
  render(){
    return (
      <div className="app-div">
        <Header />
        <Body />
      </div>
    );
  }
}
export default App;
