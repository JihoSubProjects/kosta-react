import React from 'react';
import './Comp.scss';

function TableRow(props){

  return <tr>
    <td>{props.fname}</td>
    <td>{props.lname}</td>
    <td>{props.eng}</td>
    <td><button>Edit</button></td>
    <td><button>Delete</button></td>
  </tr>
}


interface dataObjType {
  id:number, first_name:string, last_name:string, english:string
}

export default class Comp extends React.Component<{},{
  dataArray:dataObjType[]
}>{
  constructor(props:{}){
    super(props);
    this.state = {
      dataArray : [
        {"id":1,"first_name":"Ahmed","last_name":"Brotherton","english":"78"},
        {"id":2,"first_name":"Mariellen","last_name":"Phetteplace","english":"77"},
        {"id":3,"first_name":"Olympie","last_name":"MacFadyen","english":"69"},
        {"id":4,"first_name":"Earl","last_name":"Tennock","english":"61"},
        {"id":5,"first_name":"Hartley","last_name":"Lippitt","english":"52"}
      ]
    }
  }



  render(){
    return (
      <>
        <table style={{textAlign:'center'}}>
          <thead>
            <td colSpan={2}>Name</td>
            <td>English</td>
            <td colSpan={2}>Edit&Delete</td>
          </thead>
          <tbody>
            {this.state.dataArray.map((item) => {
            const {id, first_name, last_name, english} = item;
            return <TableRow key={id} fname={first_name} lname={last_name} eng={english} />
            })}
          </tbody>
        </table>

        <fieldset>
          <legend>Data Add</legend>
          <label>First Name <input type="text" /></label>
          <label>Second Name <input type="text" /></label>
          <label>English <input type="text" /></label>
          <button>Add</button>
        </fieldset>
      </>
    )
  }
}


