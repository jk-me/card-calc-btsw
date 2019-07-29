import React from 'react'

const ResultsTable = props =>{
  return(
    <div className='res'>
      <span>{props.stars} &#9733; {props.member}: {props.card}</span>

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
            <td>1</td>
            <td className='emp'>{props.results['1'].empathy}</td>
            <td className='pas'>{props.results['1'].passion}</td>
            <td className='sta'>{props.results['1'].stamina}</td>
            <td className='wis'>{props.results['1'].wisdom}</td>
          </tr>
          <tr>
            <td>30</td>
            <td className='emp'>{props.results['30'].empathy}</td>
            <td className='pas'>{props.results['30'].passion}</td>
            <td className='sta'>{props.results['30'].stamina}</td>
            <td className='wis'>{props.results['30'].wisdom}</td>
          </tr>
          <tr>
            <td>50</td>
            <td className='emp'>{props.results['50'].empathy}</td>
            <td className='pas'>{props.results['50'].passion}</td>
            <td className='sta'>{props.results['50'].stamina}</td>
            <td className='wis'>{props.results['50'].wisdom}</td>
          </tr>
        </tbody>
      </table>
    </div>

  )
}

export default ResultsTable
