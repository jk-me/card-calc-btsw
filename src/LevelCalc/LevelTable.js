import React from 'react'

const LevelTable = props =>{
  return(
    <div>
      <table>
        <thead>
          <tr>
            <th>Level</th>
            <th>Score Needed</th>
            <th>Cards</th>
            <th>Empathy</th>
            <th>Passion</th>
            <th>Stamina</th>
            <th>Wisdom</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.data[0]}-{props.data[2]}</td>
            <td>{props.data[3]}</td>
            <td>{props.data[1]}</td>
            <td className='emp'>{props.data[4]}%</td>
            <td className='pas'>{props.data[5]}%</td>
            <td className='sta'>{props.data[6]}%</td>
            <td className='wis'>{props.data[7]}%</td>
          </tr>
        </tbody>
      </table>
    </div>

  )
}

export default LevelTable
