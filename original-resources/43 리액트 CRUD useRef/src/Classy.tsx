import React from 'react';

export default class Classy extends React.Component<{},{
  numbers:{id:number,number:number}[]
}> {
  nextId = 2;

  constructor(props){
    super(props);
    this.state = {
      numbers : [{
        id : 1,
        number : Math.round(Math.random() * 100)
      }]
    }
  }

  createFn = () => {

    this.setState(current => ({
      ...current,
      numbers : [
        ...current.numbers,
        {id: this.nextId,
        number : Math.round(Math.random() * 100)}
      ]
    }))

    setTimeout(() => {this.nextId++})
  }

  render(){
    return(
      <div className="wrap">
        <p>
          <button onClick={this.createFn}>create</button>
        </p>
        <table>
          <thead>
            <tr><th>ID</th><th>Number</th></tr>
          </thead>
          <tbody>
            {this.state.numbers.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td><td>{item.number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    )
  }
}

