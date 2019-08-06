import React from 'react'

const LevelResult = props =>{
  return(
    <tr>
      <td>
        <span>{props.stars} &#9733; {props.member}: {props.card}</span>
      </td>
      <td>{props.results.total}</td>
      <td>{props.results.lvl}</td>
      <td className='emp'>{props.results.empathy}</td>
      <td className='pas'>{props.results.passion}</td>
      <td className='sta'>{props.results.stamina}</td>
      <td className='wis'>{props.results.wisdom}</td>

    </tr>

  )
}

export default LevelResult
