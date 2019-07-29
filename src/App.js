import React from 'react';
import './App.css';
// import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Calculator from './Calculator/Calculator.js'
import LevelForm from './LevelCalc/LevelForm.js'

// function App() {
class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Router>
          <>
            <Route exact path='/' render={()=><Calculator/>} />
          </>
        </Router>
      </div>
    );
  }
}

export default App;
