import React from 'react';
import axios from 'axios';
import {Bar} from 'react-chartjs-2';


export default class Comp extends React.Component<{},{loading:boolean,chartData:any}> {


  constructor(props,public options) {
    super(props)
    this.state = {
      loading: true,
      chartData: undefined
    }
    this.options = {
      responsive: true,
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'English Chart'
      }
    }
  }

  setStateFn = async () => {
    const {data} = await axios.get('Data.json');
    let labelsArray = [];
    let dataArray = [];
    for(let i = 0 ; i < data.length ; i ++){
      labelsArray.push(data[i].first_name);
      dataArray.push(data[i].english)
    }

    const chartData = {
      labels: labelsArray,
      datasets: [{
        label: 'English',
        backgroundColor: 'rgba(255, 127, 127,.5)',
        borderColor: 'rgb(255, 127, 127)',
        borderWidth: 1,
        data: dataArray,
      }],
    }

    this.setState(current => ({
      ...current,
      loading: false,
      chartData
    }))
  }

  componentDidMount = () => {
    this.setStateFn()
  }

  render(){
    return(
      <>
        <div className="appBody" style={{padding:"50px",width:'800px',margin:'0 auto'}}>
          {this.state.loading 
          ? <div className="loading">
              <h2>Now Loading</h2>
            </div>
          : 
            <Bar type="" data={this.state.chartData} options={this.options} />
          }
        </div>
      </>
    )
  }
}