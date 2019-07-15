import React from 'react'

class CardForm extends React.Component{
  render(){
    return(
      <div>
        <table>
          <thead>
            <th>Stat</th>
            
          </thead>
          <tbody>
            <tr>
              <td>Level</td>
              <td> <input type='number' name='level' /> </td>
            </tr>
            <tr>
              <td>Empathy</td>
              <td> <input type='number' name='empathy' /> </td>
              <td> <input type='radio' name='top' value='empathy'/></td>

            </tr>
            <tr>
              <td>Passion</td>
              <td> <input type='number' name='passion' /> </td>
              <td> <input type='radio' name='top' value='passion'/></td>

            </tr>
            <tr>
              <td>Stamina</td>
              <td> <input type='number' name='stamina' /> </td>
              <td> <input type='radio' name='top' value='stamina'/></td>

            </tr><tr>
              <td>Wisdom</td>
              <td> <input type='number' name='wisdom' /> </td>
              <td> <input type='radio' name='top' value='wisdom'/></td>

            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default CardForm
