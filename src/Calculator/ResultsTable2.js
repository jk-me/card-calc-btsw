import React from 'react'

const ResultsTable = props =>{
  return(
    <div>
      <table>
        <thead>
          <tr>
            <th>Level</th>
            <th>01</th>
            <th>30</th>
            <th>50</th>
          </tr>
        </thead>
        <tbody>
          <tr className='emp'>
            <td>Empathy</td>
            <td>{props.results['1'].empathy}</td>
            <td>{props.results['30'].empathy}</td>
            <td>{props.results['50'].empathy}</td>

          </tr>
          <tr className='pas'>
            <td>Passion</td>
            <td>{props.results['1'].passion}</td>
            <td>{props.results['30'].passion}</td>
            <td>{props.results['50'].passion}</td>
          </tr>
          <tr className='sta'>
            <td>Stamina</td>
            <td>{props.results['1'].stamina}</td>
            <td>{props.results['30'].stamina}</td>
            <td>{props.results['50'].stamina}</td>
          </tr>
          <tr className='wis'>
            <td>Wisdom</td>
            <td>{props.results['1'].wisdom}</td>
            <td>{props.results['30'].wisdom}</td>
            <td>{props.results['50'].wisdom}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ResultsTable
