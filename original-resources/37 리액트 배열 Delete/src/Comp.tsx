import React from 'react';
import './Comp.scss';

function TableRow(props){
  return <tr>
    <td>{props.fname}</td>
    <td>{props.lname}</td>
    <td>{props.eng}</td>
    <td><button onClick={function(){props.editFunc(props.id, props.index)}}>Edit</button></td>
    <td><button onClick={function(){props.deleteFunc(props.id)}}>Delete</button></td>
  </tr>
}


interface dataObjType {
  id:number, first_name:string, last_name:string, english:string
}

interface addInputsType {
  fname:string,
  lname:string,
  eng:string,
}

export default class Comp extends React.Component<{},{
  dataArray:dataObjType[],
  addInputs:addInputsType,
  lastDataId:number,
  editMode:boolean,
  editIndex:number,
  editID:number
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
      ],
      addInputs : {
        fname:'',
        lname:'',
        eng:''
      },
      lastDataId : 5,
      editMode : false,
      editIndex : undefined,
      editID : undefined
    }
  }



  inputChange = (e) => {
    const {name,value} = e.target;
    this.setState(
      function(current){
        return {
          ...current,
          addInputs: {
            ...current.addInputs,
            [name] : value
          },
        }
      }
    )
  }


  addEditFnc = (id) => {
    if (this.state.editMode){
      const {fname, lname, eng} = this.state.addInputs;
      this.setState(
        current=>({
          ...current,
          dataArray: current.dataArray.map(item => {
            if(item.id === id){
              item = {id:id, first_name:fname, last_name:lname, english:eng}
            }
            return item;
          }),
          editMode:false,
          addInputs:{
            ...current.addInputs,
            fname:'',
            lname:'',
            eng:''
          }
        })
      )
    } else {
      this.setState(
        current=>({
          ...current,
          dataArray: [
            ...current.dataArray,
            {
              id:this.state.lastDataId + 1,
              first_name:this.state.addInputs.fname,
              last_name:this.state.addInputs.lname,
              english:this.state.addInputs.eng
            }
          ],
          lastDataId: current.lastDataId + 1
        })
      )
    }
  }

  editFunc = (id, index) => {
    this.setState(
      current => ({
        ...current,
        editMode : true,
        editID : id,
        editIndex : index,
        addInputs : {
          ...current.addInputs,
          fname:current.dataArray[index].first_name,
          lname:current.dataArray[index].last_name,
          eng:current.dataArray[index].english
        }
      })
    )
  }

  deleteFunc = (id) => {
    this.setState(
      current => ({
        ...current,
        dataArray: current.dataArray.filter(item => {
          return item.id !== id
        }),
      })
    )
  }


  render(){
    return (
      <>
        <table style={{textAlign:'center'}}>
          <thead>
            <tr>
              <th colSpan={2}>Name</th>
              <th>English</th>
              <th colSpan={2}>Edit&Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.dataArray.map((item, index) => {
            const {id, first_name, last_name, english} = item;
            return <TableRow key={id} id={id} fname={first_name} lname={last_name} eng={english} editFunc={this.editFunc} index={index} deleteFunc={this.deleteFunc} />
            })}
          </tbody>
        </table>

        <fieldset>
          <legend>Data {this.state.editMode ? "Edit" : "Add"}</legend>
          <label>First Name <input type="text" name="fname" value={this.state.addInputs.fname} onChange={this.inputChange}/></label>
          <label>Second Name <input type="text" name="lname" value={this.state.addInputs.lname} onChange={this.inputChange} /></label>
          <label>English <input type="text" name="eng" value={this.state.addInputs.eng} onChange={this.inputChange} /></label>
          <button onClick={()=>{this.addEditFnc(this.state.editID)}}>{this.state.editMode ? "Edit" : "Add"}</button>
        </fieldset>
      </>
    )
  }
}


