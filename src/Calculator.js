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
      top:'',
      results:{}
    }
  }

  handleChange = (event) =>{
    console.log(`${event.target.name} changed`)
    this.setState({[event.target.name]:event.target.value})
  }

  calculate = () =>{
    console.log(this.state)
    let top = (39-23)*29
    let e = parseInt(this.state.empathy) + (23*29)
    let p = parseInt(this.state.passion) + (23*29)
    let s = parseInt(this.state.stamina) + (23*29)
    let w = parseInt(this.state.wisdom) + (23*29)
    let result = {empathy: e, passion:p, stamina:s, wisdom:w}
    result[this.state.top]+= top
    console.log(result)
    this.setState({results:result})

  }


  render(){
    return(
      <CardForm handler={this.handleChange} calculate={this.calculate}/>
    )
  }
}

export default Calculator
