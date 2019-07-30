import React from 'react'

class CardNameForm extends React.Component{

  render(){
    return(
      <div>
        <label>Card Name: </label>
        <input type='text' name='name' value="You're Quite Handsome" onChange={e => this.props.handler(e)}/>

        <div>
          <label>Member: </label>
          <select name='member' onChange={e => this.props.handler(e)}>
            <option value='RM'>RM</option>
            <option value='Jin'>Jin</option>
            <option value='Suga'>Suga</option>
            <option value='J-Hope'>J-Hope</option>
            <option value='Jimin'>Jimin</option>
            <option value='V'>V</option>
            <option value='Jungkook'>Jungkook</option>
          </select>
        </div>

        <button onClick={this.props.calculate}>Calculate</button>
        
      </div>
    )
  }
}

export default CardNameForm
