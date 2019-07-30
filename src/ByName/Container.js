import React from 'react'
import card_stats from '../cardbasestats.csv'
import Papa from 'papaparse'
import CardNameForm from './CardNameForm'
import ResultsTable from '../Calculator/ResultsTable'

class ByName extends React.Component{
  state = {
      name: "You're Quite Handsome",
      position:[1,1],
      results:0
  }


  reslist = { empathy:[], stamina:[], passion:[], wisdom:[] }

  componentDidMount(){
    this.fetchCsv()
  }

  card_data = []

  fetchCsv = () => {
    Papa.parse(card_stats, {
        download: true,
        complete: (results) => {
          this.card_data = results.data
          console.log(this.card_data);
          //names at index 1,9,17,25,33,41,49
        }
    })
  }

  setCardData = () =>{

  }

  handleChange = (event) =>{
    this.setState({[event.target.name]:event.target.value})
  }

  calculate = () =>{
    console.log(this.state)
    console.log(this.card_data)

    // let lvl = parseInt(this.state.level) is 1
    let i = this.state.position
    let top = this.card_data[i[0]][i[1]-1]
    console.log(top)
    let e = parseInt(this.card_data[i[0]][i[1]+1])
    let p = parseInt(this.card_data[i[0]][i[1]+2])
    let s = parseInt(this.card_data[i[0]][i[1]+3])
    let w = parseInt(this.card_data[i[0]][i[1]+4])
    let results = {'1': {empathy: e, passion:p, stamina:s, wisdom:w}}

    // let starhash ={'3': [23,35] , '4':[26,39] , '5':[30,45]}
    let mult
    if (i[0] < 10){
      mult = [30,45]
    }
    console.log(mult)
    results['30'] = {
      empathy: e+= (mult[0]*29),
      passion: p+= (mult[0]*29),
      stamina: s+= (mult[0]*29),
      wisdom: w+= (mult[0]*29)}
    results['50'] = {
      empathy: e+= (mult[0]*20),
      passion: p+= (mult[0]*20),
      stamina: s+= (mult[0]*20),
      wisdom: w+= (mult[0]*20)}

    results['30'][top]+= (mult[1]-mult[0])*29
    results['50'][top]+= (mult[1]-mult[0])*49
    console.log(results)
    this.reslist[top].push(<ResultsTable results={results} card={this.state.name} />)
    // member={this.state.member} stars = {this.state.stars}
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
