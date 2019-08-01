import React from 'react'

class LevelForm extends React.Component{

  data = []

  componentDidMount(){
    // this.extractNames()
  }

  extractNames = () =>{
    let alldata = this.props.data  //main story data
    if (alldata.length > 0){
      for ( let i = 65 ; i <= 78  ; i++){
        if (![11,22,35,49,64].includes(i)){
          this.data.push([alldata[i][0], alldata[i][2]])
        }
      }
    }
    console.log(this.data)
  }

  renderOptions = () =>{
    this.extractNames()
    // console.log(this.data)
    let options =[]
    // Object.keys(this.data).map( (key) => {
    //   // console.log(this.data[key])
    //   // options.push(<option value={this.data[key]}>{key}</option>)
    // })
    return options
  }

  render(){
    return(
      <div>

        <p>LEVEL FORM</p>
        <div>
          <label>Card Name: </label>
          <select name='position' onChange={e => this.props.handler(e)}>
            {this.renderOptions()}
          </select>
        </div>

      </div>

    )
  }
}

export default LevelForm
