import React from 'react'
import main_story from '../main-story.csv'
import Papa from 'papaparse'
import CardNameForm from './CardNameForm'
import ResultsTable from '../Calculator/ResultsTable'

class ByName extends React.Component{
  state = {
      name: '',
      // level: 1,
      // stars: 5,
      // member: 'RM',
      // empathy: 0,
      // passion: 0,
      // wisdom: 0,
      // stamina:0,
      // top:'empathy',
      results:0
  }


  reslist = { empathy:[], stamina:[], passion:[], wisdom:[] }

  componentDidMount(){
    this.fetchCsv()
  }

  card_data = []

  fetchCsv() {
    const csv = require('../cardbasestats.csv')
    Papa.parse(csv, {
        // header: true,
        download: true,
        skipEmptyLines: true,
        complete: function(results) {
          this.card_data = results.data
          console.log(this.card_data);
        }
    })
  }

  handleChange = (event) =>{
    this.setState({[event.target.name]:event.target.value})
  }

  calculate = () =>{
    console.log(this.state)
    let lvl = parseInt(this.state.level)
    let e = parseInt(this.state.empathy)
    let p = parseInt(this.state.passion)
    let s = parseInt(this.state.stamina)
    let w = parseInt(this.state.wisdom)
    let results = {'1': {empathy: e, passion:p, stamina:s, wisdom:w}}

    let starhash ={'3': [23,35] , '4':[26,39] , '5':[30,45]}
    let mult = starhash[this.state.stars][0]
    let tmult = starhash[this.state.stars][1]

    e = results['1'].empathy
    p = results['1'].passion
    s = results['1'].stamina
    w = results['1'].wisdom

    results['30'] = {
      empathy: e+= (mult*29),
      passion:p+= (mult*29),
      stamina:s+= (mult*29),
      wisdom:w+= (mult*29)}
    results['50'] = {
      empathy:e+= (mult*20),
      passion:p+= (mult*20),
      stamina:s+= (mult*20),
      wisdom:w+= (mult*20)}

    results['30'][this.state.top]+= (tmult-mult)*29
    results['50'][this.state.top]+= (tmult-mult)*49
    console.log(results)
    this.reslist[this.state.top].push(<ResultsTable results={results} card={this.state.name} member={this.state.member} stars = {this.state.stars}/>)
    this.setState({results:this.reslist.length})

    console.log(this.state)

  }

  renderResults = (top) =>{
    return(
      this.reslist[top].map( el => {return el})
    )
  }

  render(){
    return(
      <div id='calc'>
        <CardNameForm handler={this.handleChange} calculate={this.calculate}/>
        <div className='col'>
          <p>Empathy</p>
          {this.renderResults('empathy')}
        </div>
        <div className='col'>
          <p>Passion</p>
          {this.renderResults('passion')}
        </div>
        <div className='col'>
          <p>Stamina</p>
          {this.renderResults('stamina')}
        </div>
        <div className='col'>
          <p>Wisdom</p>
          {this.renderResults('wisdom')}
        </div>

      </div>

    )
  }
}

export default ByName
