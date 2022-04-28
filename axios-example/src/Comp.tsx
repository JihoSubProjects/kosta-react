import React from 'react';
import axios from 'axios';

export default class Comp extends React.Component<{},{loading:boolean,axiosData:any}> {


  constructor(props: any) {
    super(props)
    this.state = {
      loading: true,
      axiosData: undefined
    }
  }

  setStateFn = async () => {
    const {data} = await axios.get('Data.json');
    this.setState(current => ({
      ...current,
      loading: false,
      axiosData:data
    }))

    return data;
  }

  componentDidMount = () => {
    this.setStateFn()
  }

  render(){
    return(
      <>
        <div className="appBody" style={{padding:"50px"}}>
          {this.state.loading 
          ? <div className="loading">
              <h2>Now Loading</h2>
            </div>
          : <>
              <h2>Loading Complete</h2>
              <p>{this.state.axiosData.a}</p>
              <p>{this.state.axiosData.b}</p>
            </>
          }
        </div>
      </>
    )
  }
}