import React from 'react'
import CardForm from './card_form'

class Calculator extends React.Component{
  constructor(){
    super()
    this.state = {
      name: '',
      level: 1,
      member: '',
      empathy: 0,
      passion: 0,
      wisdom: 0,
      stamina:0,
      top:''
    }
  }

  handleChange = (event) =>{
    console.log(`${event.target.name} changed`)
    this.setState({[event.target.name]:event.target.value})
  }

  calculate = () =>{
    
  }

  render(){
    return(
      <CardForm handler={this.handleChange}/>
    )
  }
}

export default Calculator
