import React from 'react'
import CardForm from './card_form'
import ResultsTable2 from './ResultsTable2'

class Calculator extends React.Component{
  state = {
      name: '',
      level: 1,
      member: '',
      empathy: 0,
      passion: 0,
      wisdom: 0,
      stamina:0,
      top:'empathy',
      results:{'1':{},'30':{},'50':{}}
    }

  nums=['a']

  reslist = [
  ]

  handleChange = (event) =>{
    // console.log(`${event.target.name} changed`)
    this.setState({[event.target.name]:event.target.value})
  }

  calculate = () =>{
    console.log(this.state)
    let e = parseInt(this.state.empathy)
    let p = parseInt(this.state.passion)
    let s = parseInt(this.state.stamina)
    let w = parseInt(this.state.wisdom)
    let results = {'1': {empathy: e, passion:p, stamina:s, wisdom:w}}

    results['30'] = {empathy: e+= (23*29), passion:p+= (23*29), stamina:s+= (23*29), wisdom:w+= (23*29)}
    results['50'] = {empathy: e+= (23*20), passion:p+= (23*20), stamina:s+= (23*20), wisdom:w+= (23*20)}

    results['30'][this.state.top]+= (39-23)*29
    results['50'][this.state.top]+= (39-23)*20
    console.log(results)
    this.setState({results:results})
    this.reslist.push(<ResultsTable2 results={results} />)
    console.log(this.reslist)


  }



  renderResults = (results) =>{
    return(
      <ResultsTable2 results={results} />
    )
  }

  render(){
    return(
      <div id='calc'>
        <CardForm handler={this.handleChange} calculate={this.calculate}/>
        {this.reslist[0]}
        {this.reslist[1]}
        {this.reslist[2]}

      </div>

    )
  }
}

export default Calculator
