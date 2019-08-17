import React from 'react'

class LevelForm extends React.Component{

  data = []

  componentDidMount(){
    // this.extractNames()
  }

  extractNames = () =>{
    if (this.props.data.length > 0 && this.data.length === 0){
      let alldata = this.props.data  //main story data
      for ( let i = 1 ; i <= 78  ; i++){
        if (![11,22,35,49,64].includes(i)){
          this.data.push([i,alldata[i][0], alldata[i][2]])
        }
      }
    }
  }

  renderOptions = () =>{
    this.extractNames()
    // console.log(this.data)
    let options =[]
    this.data.reverse().map( el => {
      options.push(<option value={el[0]}>{el[1]}-{el[2]}</option>)
  })
    return options
  }

  render(){
    return(
      <div>

        <div>
          <label>Level: </label>
          <select name='levelrow' onChange={e => this.props.handler(e)}>
            {/* <option disabled selected value> -- select an option -- </option> */}
            {this.renderOptions()}
          </select>
        </div>

      </div>

    )
  }
}

export default LevelForm
