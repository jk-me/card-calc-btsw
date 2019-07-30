import React from 'react';
import './App.css';
// import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Calculator from './Calculator/Calculator.js'
import LevelForm from './LevelCalc/LevelForm.js'
import ByName from './ByName/Container.js'

// function App() {
class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Router>
          <>
            <Route exact path='/' render={()=><Calculator/>} />
            <Route exact path='/levels' render={ () => <LevelForm />} />
            <Route exact path='/byname' render={ () => <ByName />} />
          </>
        </Router>
      </div>
    );
  }
}

export default App;
