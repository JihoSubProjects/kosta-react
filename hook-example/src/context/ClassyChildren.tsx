import React from 'react';
import { MainContext } from './MainContext';

// declare context: React.ContextType<typeof MyContext>

class ClassyLeft extends React.Component {
  context!: React.ContextType<typeof MainContext>;
  static contextType = MainContext;

  minusFn = () => {
    this.context.setN(this.context.n - 1)
  }

  render() {
    return (
      <button onClick={this.minusFn}> -1 </button>
    )
  }
}




class ClassyRight extends React.Component {
  context!: React.ContextType<typeof MainContext>;
  static contextType = MainContext;

  plusFn = () => {
    this.context.setN(this.context.n + 1)
  }

  render(){
    return (
      <button onClick={this.plusFn}> +1 </button>
    )
  }
}





class ClassyCircle extends React.Component {
  context!: React.ContextType<typeof MainContext>;
  static contextType = MainContext;

  render(){
    return (
      <span> {this.context.n} </span>
    )
  }
}





export default class ClassyMiddle extends React.Component {
  render() {
    return <>
      <ClassyLeft />
      <ClassyCircle />
      <ClassyRight />
    </>
  }
}

