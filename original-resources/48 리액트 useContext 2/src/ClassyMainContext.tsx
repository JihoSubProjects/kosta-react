import React from 'react';

export const ClassyMainContext = React.createContext(null);

export default class ClassyContextProvider extends React.Component<{children},{n:number,setN}> {
  constructor(props){
    super(props)
    this.state = {
      n : 0,
      setN : newN => {this.setState(current => ({
        ...current,
        n : newN
      }))}
    }
  }
  render(){
    return (
      <ClassyMainContext.Provider value={this.state}>
        {this.props.children}
      </ClassyMainContext.Provider>
    )
  }
}