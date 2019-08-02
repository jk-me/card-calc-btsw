import React from 'react'

const LevelResult = props =>{
  return(
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <span>{props.stars} &#9733; {props.member}: {props.card}</span>
            </td>
            <td>Level: {props.results.lvl}</td>
            <td className='emp'>{props.results.empathy}</td>
            <td className='pas'>{props.results.passion}</td>
            <td className='sta'>{props.results.stamina}</td>
            <td className='wis'>{props.results.wisdom}</td>
            <td>Total: {props.results.total}</td>
          </tr>
        </tbody>
      </table>
    </div>

  )
}

export default LevelResult
