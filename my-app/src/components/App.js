import React, {Component} from 'react';
import './App.css';
import Header from './header/Header';
import Summary from './summary/Summary';
import ParticlesBg from 'particles-bg';


class App extends Component {
  render(){
    return (
      <div className="app-div">
        <ParticlesBg color="#FFFFFF" type="cobweb" num={200} bg={{position: "absolute"}} />
        <Header />
        <Summary />
      </div>
    );
  }
}
export default App;
