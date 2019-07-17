import React from 'react'
import CardForm from './card_form'
import ResultsTable from './ResultsTable'

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
    let stats = ['empathy', 'passion', 'stamina','wisdom']
    let lvl = parseInt(this.state.level)
    let e = parseInt(this.state.empathy)
    let p = parseInt(this.state.passion)
    let s = parseInt(this.state.stamina)
    let w = parseInt(this.state.wisdom)
    let results = {'1': {empathy: e, passion:p, stamina:s, wisdom:w}}

    if (lvl !== 1){
      let diff = lvl - 1
      for (const key in results['1']){
        if (key === this.state.top){
          results['1'][key] -=(diff * 39)
        }
        else{
          results['1'][key] -= (diff*23)
        }
      }
    }

    e = results['1'].empathy
    p = results['1'].passion
    s = results['1'].stamina
    w = results['1'].wisdom

    results['30'] = {empathy: e+= (23*29), passion:p+= (23*29), stamina:s+= (23*29), wisdom:w+= (23*29)}
    results['50'] = {empathy: e+= (23*20), passion:p+= (23*20), stamina:s+= (23*20), wisdom:w+= (23*20)}

    results['30'][this.state.top]+= (39-23)*29
    results['50'][this.state.top]+= (39-23)*49
    console.log(results)
    this.reslist.push(<ResultsTable results={results} />)
    this.setState({results:this.reslist.length})

    console.log(this.state)

  }

// **************GIT COMMIT -M 'finish calculator fn for any level card'

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
