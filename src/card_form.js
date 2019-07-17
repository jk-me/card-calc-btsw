import React from 'react'

class CardForm extends React.Component{

  render(){
    return(
      <div>
        <label>Card Name: </label>
        <input type='text' name='name' onChange={e => this.props.handler(e)}/>

        <div>
          <label>Member: </label>
          <select name='member' onChange={e => this.props.handler(e)}>
            <option value='nj'>RM</option>
            <option value='sj'>Jin</option>
            <option value='yg'>Suga</option>
            <option value='hs'>J-Hope</option>
            <option value='jm'>Jimin</option>
            <option value='th'>V</option>
            <option value='jk'>Jungkook</option>
          </select>
        </div>

        <div>
          <label>Level: </label>
          <input type='number' name='level' onChange={e => this.props.handler(e)}/>
        </div>

        <div>
          <label>Stars: </label>
          <select name='stars' onChange={e => this.props.handler(e)}>
            <option value='5'>5</option>
            <option value='4'>4</option>
            <option value='3'>3</option>
            <option value='2'>2</option>
            <option value='1'>1</option>
          </select>
        </div>


        <table>
          <thead>
            <tr>
              <th>Stat</th>
              <th>Number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Empathy</td>
              <td> <input type='text' name='empathy' onChange={e => this.props.handler(e)}/> </td>

            </tr>
            <tr>
              <td>Passion</td>
              <td> <input type='text' name='passion' onChange={e => this.props.handler(e)} /> </td>

            </tr>
            <tr>
              <td>Stamina</td>
              <td> <input type='text' name='stamina'  onChange={e => this.props.handler(e)}/> </td>

            </tr><tr>
              <td>Wisdom</td>
              <td> <input type='text' name='wisdom'onChange={e => this.props.handler(e) }/> </td>

            </tr>
          </tbody>
        </table>

        <label>Top Stat: </label>
        <select name='top' onChange={e => this.props.handler(e)}>
          <option value='empathy'>Empathy</option>
          <option value='passion'>Passion</option>
          <option value='stamina'>Stamina</option>
          <option value='wisdom'>Wisdom</option>
        </select>

        <div>
          <button onClick={this.props.calculate}>Calculate</button>
        </div>

      </div>
    )
  }
}

export default CardForm
