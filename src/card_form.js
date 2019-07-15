import React from 'react'

class CardForm extends React.Component{
  render(){
    return(
      <div>
        <label>Card Name: </label>
        <input type='text' name='name'/>

        <div>
          <label>Level: </label>
          <input type='number' name='level'/>
        </div>


        <div>
          <label>Member: </label>
          <select>
            <option value='nj'>RM</option>
            <option value='sj'>Jin</option>
            <option value='yg'>Suga</option>
            <option value='hs'>J-Hope</option>
            <option value='jm'>Jimin</option>
            <option value='th'>V</option>
            <option value='jk'>Jungkook</option>
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
              <td> <input type='number' name='empathy' /> </td>

            </tr>
            <tr>
              <td>Passion</td>
              <td> <input type='number' name='passion' /> </td>

            </tr>
            <tr>
              <td>Stamina</td>
              <td> <input type='number' name='stamina' /> </td>

            </tr><tr>
              <td>Wisdom</td>
              <td> <input type='number' name='wisdom' /> </td>

            </tr>
          </tbody>
        </table>

        <label>Top Stat: </label>
        <select>
          <option value='empathy'>Empathy</option>
          <option value='passion'>Passion</option>
          <option value='stamina'>Stamina</option>
          <option value='wisdom'>Wisdom</option>
        </select>

        <div>
          <button>Calculate</button>
        </div>

      </div>
    )
  }
}

export default CardForm
