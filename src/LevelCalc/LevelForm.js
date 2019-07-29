import React from 'react'
import main_story from '../main-story.csv'
import Papa from 'papaparse'

class LevelForm extends React.Component{

  componentDidMount(){
    this.fetchCsv()
  }

  fetchCsv() {
    const csv = require('../cardbasestats.csv')

    Papa.parse(csv, {
        // header: true,
        download: true,
        skipEmptyLines: true,
        complete: function(results) {
          console.log(results.data[1]);
        }
      }
    )
  }

  render(){
    return(
      <div>

        <p>LEVEL FORM</p>
      </div>

    )
  }
}

export default LevelForm
