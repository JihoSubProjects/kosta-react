import React from 'react';
import {ClassyMainContext} from './ClassyMainContext';

class ClassyLeft extends React.Component {
  static contextType = ClassyMainContext;

  minusFn = () => {
    this.context.setN(this.context.n - 1)
  }

  render(){
    return (
      <button onClick={this.minusFn}>-1</button>
    )
  }
}




class ClassyRight extends React.Component {
  static contextType = ClassyMainContext;

  plusFn = () => {
    this.context.setN(this.context.n + 1)
  }

  render(){
    return (
      <button onClick={this.plusFn}>+1</button>
    )
  }
}





class ClassyCircle extends React.Component {
  static contextType = ClassyMainContext
  render(){
    return (
      <span>{this.context.n}</span>
    )
  }
}





export default class ClassyMiddle extends React.Component {
  render(){
    return ( 
      <>
        <ClassyLeft />
        <ClassyCircle />
        <ClassyRight />
      </>
    )
  }
}

