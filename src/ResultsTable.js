import React from 'react'

const ResultsTable = props =>{
  return(
    <table>
      <thead>
        <tr>
          <th>Level</th>
          <th>Empathy</th>
          <th>Passion</th>
          <th>Stamina</th>
          <th>Wisdom</th>

        </tr>
      </thead>
      <tbody>
        <tr>
          <td>30</td>
          <td>{props.results.th.empathy}</td>
          <td>{props.results.th.passion}</td>
          <td>{props.results.th.stamina}</td>
          <td>{props.results.th.wisdom}</td>
        </tr>
        <tr>
          <td>50</td>
          <td>{props.results.fi.empathy}</td>
          <td>{props.results.fi.passion}</td>
          <td>{props.results.fi.stamina}</td>
          <td>{props.results.fi.wisdom}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default ResultsTable
