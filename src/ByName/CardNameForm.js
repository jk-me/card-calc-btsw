import React from 'react'

class CardNameForm extends React.PureComponent{
  data = {}

  componentDidMount(){
    // this.extractNames()
  }

  extractNames = () =>{
    let alldata = this.props.data
    // console.log(alldata)
    if (alldata.length > 0){
      // console.log(alldata)
      for ( let i = 1 ; i <10 ; i++){
        this.data[alldata[i][1]] = [i, 1]
        this.data[alldata[i][9]] = [i, 9]
        this.data[alldata[i][17]] = [i, 17]
        this.data[alldata[i][25]] = [i, 25]
        this.data[alldata[i][33]] = [i, 33]
        this.data[alldata[i][41]] = [i, 41]
        this.data[alldata[i][49]] = [i, 49]
      }
    }
    // console.log(this.data)
  }

  renderOptions = () =>{
    this.extractNames()
    // console.log(this.data)
    let options =[]
    Object.keys(this.data).map( (key) => {
      // console.log(this.data[key])
      options.push(<option value={[this.data[key]]}>{key}</option>)
    })
    return options
  }


  render(){
    return(
      <div>

        <input type='text' name='name' value="You're Quite Handsome" onChange={e => this.props.handler(e)}/>

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
