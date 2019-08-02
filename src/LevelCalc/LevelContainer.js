import React from 'react'
import card_stats from '../cardbasestats.csv'
import main_story from '../main-story.csv'

import Papa from 'papaparse'
import LevelForm from './LevelForm'
import LevelTable from './LevelTable'
import CardNameForm from '../ByName/CardNameForm'
import ResultsTable from '../Calculator/ResultsTable'

class ByName extends React.Component{
  state = {
      name: "You're Quite Handsome",
      position:'1,1',
      levelrow: 74,  //level 6-1
      level:{
        total: 0,
        empathy: 50,
        passion: 50,
        stamina: 200,
        wisdom: 150,
      },
      results:0,
      card_data:[],
      story_data:[]
  }

  reslist = []

  componentDidMount(){
    this.fetchCardData()
    this.fetchStoryData()
  }

  fetchCardData = () => {
    Papa.parse(card_stats, {
        download: true,
        complete: (results) => {
          // this.card_data = results.data
          // console.log(this.card_data);
          this.setState({card_data: results.data})
        }
    })
  }

  fetchStoryData() {
    Papa.parse(main_story, {
        download: true,
        complete: (results) => {
          this.setState({story_data: results.data})
          // console.log(this.state.story_data);
        }
      }
    )
  }

  handleLevelChange = (event) =>{
    console.log(this.state.story_data[event.target.value])
    this.setState({
      [event.target.name]:event.target.value, //levelrow
      level: {
        empathy: this.state.story_data[event.target.value][4],
        passion: this.state.story_data[event.target.value][5],
        stamina: this.state.story_data[event.target.value][6],
        wisdom: this.state.story_data[event.target.value][7],
      }
    })
  }

  calculate = () =>{
    let i = this.state.position.split(',')
    i = [parseInt(i[0]), parseInt(i[1])]
    // console.log(i)  //[1,0]
    let top = this.state.card_data[i[0]][(i[1]-1)]

    let e = parseInt(this.state.card_data[i[0]][i[1]+1])
    let p = parseInt(this.state.card_data[i[0]][i[1]+2])
    let s = parseInt(this.state.card_data[i[0]][i[1]+3])
    let w = parseInt(this.state.card_data[i[0]][i[1]+4])
    let results = {'1': {empathy: e, passion:p, stamina:s, wisdom:w}}

    //names at index 1,9,17,25,33,41,49
    const memberhash ={'1': 'Jin' , '9':'Suga' , '17':'J-Hope', '25':'RM', '33':'Jimin', '41':'V', '49':'Jungkook'}

    let mult, stars
    let member = memberhash[i[1]]
    if (i[0] < 10){
      mult = [30,45]
      stars = 5
    }
    else if (i[0] < 25){
      mult =[26,39]
      stars = 4
    }
    else if (i[0] < 43){
      mult =[23,35]
      stars = 3
    }
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
    // console.log(results)
    this.reslist[top].push(<ResultsTable results={results} card={this.state.card_data[i[0]][i[1]]} stars = {stars} member={member}/>)
    this.setState({results:this.state.results+1})

    // console.log(this.state)

  }

  renderResults = () =>{
    return(
      this.reslist.map( el => {return el})
    )
  }

  renderLevelTable = () =>{
    if (this.state.story_data[this.state.levelrow]){
      return(
        <LevelTable data={this.state.story_data[this.state.levelrow]}/>
      )
    }
  }

  render(){
    return(
      <div>
        <h4>Calculate level 30 and 50 stats for any 3-5 star card.</h4>
        <LevelForm data={this.state.story_data} handler={this.handleLevelChange}/>
        <CardNameForm handler={this.handleChange} calculate={this.calculate} data={this.state.card_data} level='true'/>
        <p>Tip: Select input field and start typing name of card</p>
        {this.renderLevelTable()}


      </div>

    )
  }
}

export default ByName
