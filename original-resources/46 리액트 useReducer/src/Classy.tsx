import React from 'react';

export default class Classy extends React.Component<{},{n:number}> {
  constructor(props:{}){
    super(props);
    this.state = {
      n : 0
    }
  }

  dispatchN = (action) => {
    this.setState(current => {
      if(action.type === 'PLUS_N'){
        return ({
          ...current,
          n : current.n + 1
        });
      } else if (action.type === 'MINUS_N'){
        return ({
          ...current,
          n : current.n - 1
        });
      } else {
        return current;
      }
    })
  }

  plusFn = () => {
    this.dispatchN({type : 'PLUS_N'})
  }

  minusFn = () => {
    this.dispatchN({type : 'MINUS_N'})
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

