import React from 'react'

class CardNameForm extends React.PureComponent{
  data = {}

  componentDidMount(){
    // this.extractNames()
  }

  extractNames = () =>{
    let alldata = this.props.data
    if (alldata.length > 0){
      for ( let i = 1 ; i < 43 ; i++){
        if (![10,25,43,49].includes(i)){
          this.data[alldata[i][1]] = [i, 1]
          this.data[alldata[i][9]] = [i, 9]
          this.data[alldata[i][17]] = [i, 17]
          this.data[alldata[i][25]] = [i, 25]
          this.data[alldata[i][33]] = [i, 33]
          this.data[alldata[i][41]] = [i, 41]
          this.data[alldata[i][49]] = [i, 49]
        }
      }
    }
  }

  renderOptions = () =>{
    this.extractNames()
    // console.log(this.data)
    let options =[]
    Object.keys(this.data).map( (key) => {
      // console.log(this.data[key])
      options.push(<option value={this.data[key]}>{key}</option>)
    })
    return options
  }


  render(){
    return(
      <div>

        <div>
          <label>Card Name: </label>
          <select name='position' onChange={e => this.props.handler(e)}>
            {this.renderOptions()}
          </select>
        </div>

        <button onClick={this.props.calculate}>Calculate</button>

      </div>
    )
  }
}

export default CardNameForm
