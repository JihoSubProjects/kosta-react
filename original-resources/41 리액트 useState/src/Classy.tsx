import React from 'react';

export default class Classy extends React.Component<{},{n:number}> {
  constructor(props:{}){
    super(props);
    this.state = {
      n : 0
    }
  }

  plusFn = () => {
    this.setState(current => ({
      ...current,
      n : current.n + 1
    }))
  }

  minusFn = () => {
    this.setState(current => ({
      ...current,
      n : current.n - 1
    }))
  }

  render(){
    return(
      <div className="wrap">
        <p>
          <button onClick={this.minusFn}>-1</button>
          <span>{this.state.n}</span>
          <button onClick={this.plusFn}>+1</button>
        </p>
      </div>
    )
  }
}

