import React from 'react'

const LevelResult = ( {results, stars, card, member} )=>{
  return(
    <tr>
      <td>
        <span>{stars} &#9733; {member}: {card}</span>
      </td>
      <td>{results.total}</td>
      <td>{results.lvl}</td>
      <td className='emp'>{results.empathy}</td>
      <td className='pas'>{results.passion}</td>
      <td className='sta'>{results.stamina}</td>
      <td className='wis'>{results.wisdom}</td>
    </tr>
  )
}

export default LevelResult
