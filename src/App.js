import React from 'react';
import './App.css';
// import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import NavBar from './NavBar.js'
import Calculator from './Calculator/Calculator.js'
import LevelContainer from './LevelCalc/LevelContainer.js'
import ByName from './ByName/Container.js'

// function App() {
class App extends React.Component{
  render(){
    return (
      <div className="App">

        <Router>
          <>
            <NavBar />
            <Route exact path='/oldcalc' render={()=><Calculator/>} />
            <Route exact path='/levels' render={ () => <LevelContainer />} />
            <Route exact path='/' render={ () => <ByName />} />
          </>
        </Router>
      </div>
    );
  }
}

export default App;
