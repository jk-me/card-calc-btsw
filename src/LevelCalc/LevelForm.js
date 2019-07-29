import React from 'react'

class LevelForm extends React.Component{

  componentDidMount(){
    this.fetchCsv()
  }

  fetchCsv() {
    return fetch('/src/main-story.csv')
      .then( resp => resp.text())
      .then( data => console.log(data))
            // let reader = response.body.getReader();
            // let decoder = new TextDecoder('utf-8');
            //
            // return reader.read().then(function (result) {
            //     return decoder.decode(result.value);
  }
    // getData(result) {
    //     this.setState({data: result.data});
    // }
    //
    // async getCsvData() {
    //     let csvData = await this.fetchCsv();
    //
    //     Papa.parse(csvData, {
    //         complete: this.getData
    //     });
    // }
    // $.ajax({
    //   url: 'script/' + storyName[i] + '_story.csv',
    //   dataType: 'text',
    //   success: function(data){
    //     loadStageData(data);
    //     loadStoryData(++i);
    //   }
    // });

  render(){
    return(
      <p>LEVEL FORM</p>
    )
  }
}

export default LevelForm
