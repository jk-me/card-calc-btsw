import React from 'react'
import CardForm from './card_form'
import ResultsTable from './ResultsTable'

class Calculator extends React.Component{
  state = {
      name: '',
      level: 1,
      stars: 5,
      member: 'RM',
      empathy: 0,
      passion: 0,
      wisdom: 0,
      stamina:0,
      top:'empathy',
      results:{'1':{},'30':{},'50':{}}
    }


  reslist = [
  ]

  handleChange = (event) =>{
    // console.log(`${event.target.name} changed`)
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


    if (lvl !== 1){
      let diff = lvl - 1
      for (const key in results['1']){
        if (key === this.state.top){
          results['1'][key] -=(diff * tmult)
        }
        else{
          results['1'][key] -= (diff * mult)
        }
      }
    }

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
    this.reslist.push(<ResultsTable results={results} card={this.state.name} member={this.state.member}/>)
    this.setState({results:this.reslist.length})

    console.log(this.state)

  }


  renderResults = () =>{
    return(
      this.reslist.map( el => {return el})
    )
  }

  render(){
    return(
      <div id='calc'>
        <CardForm handler={this.handleChange} calculate={this.calculate}/>
        {this.renderResults()}
      </div>

    )
  }
}

export default Calculator
