import React from 'react';
import ClassyMiddle from './ClassyChildren';
import {MainContext} from './MainContext';

export default class Classy extends React.Component<{},{ n: number, setN: (n: number) => void }> {
  constructor(props: {}) {
    super(props)
    this.state = {
      n: 0,
      setN: (newN: number) => {this.setState(current => ({
        ...current,
        n : newN
      }))}
    }
  }

  render() {
    return <div className="wrap">
      <p>
        <MainContext.Provider value={this.state}>
          <ClassyMiddle />
        </MainContext.Provider>
      </p>
    </div>
  }
}

