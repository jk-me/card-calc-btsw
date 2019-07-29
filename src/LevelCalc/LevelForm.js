import React from 'react'
import CSVReader from 'react-csv-reader'
import data from '../main-story.csv'

class LevelForm extends React.Component{

  componentDidMount(){
    this.fetchCsv()
  }

  fetchCsv() {
    console.log(data)
    fetch({
      url: '../main-story.csv',
      dataType: 'text',
      success: function(data){
        console.log(data)
        // loadStageData(data);
        // loadStoryData(++i);
      }
    });
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
