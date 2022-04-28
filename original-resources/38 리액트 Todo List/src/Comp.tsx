import React from 'react';
import './Comp.scss';

function TableRow(props){
  return <tr className={props.selected ? "selected" : ""} onClick={()=>{props.selectFunc(props.id, props.index)}}>
    <td>{props.toDo}</td>
    <td>{props.writeTime}</td>
  </tr>
}



interface addInputsType {
  toDo:string
}

const localStorageValue = JSON.parse(localStorage.getItem('dataArray'));
const localStorageValue2 = JSON.parse(localStorage.getItem('lastDataID'));

export default class Comp extends React.Component<{},{
  dataArray:any,
  addInputs:addInputsType,
  lastDataId:number,
  editMode:boolean,
  editIndex:number,
}>{
  constructor(props:{}){
    super(props);
    this.state = {
      dataArray : (localStorageValue || []),
      addInputs : {
        toDo:'',
      },
      lastDataId : (localStorageValue2 || 0),
      editMode : false,
      editIndex : undefined,
    }
  }



  inputChange = (e) => {
    const {value} = e.target;
    this.setState(
      function(current){
        return {
          ...current,
          addInputs: {
            ...current.addInputs,
            toDo : value
          },
        }
      }
    )
  }


  addEditFnc = () => {
    const nowTime = new Date();
    if (this.state.editMode){
      this.setState(
        current=>({
          ...current,
          dataArray: current.dataArray.map(item => {
            if(item.selected){
              item = {
                ...item,
                toDoMemo:current.addInputs.toDo,
                writeTime:`${nowTime.getFullYear()}년 ${nowTime.getMonth() + 1}월 ${nowTime.getDate()}일 ${nowTime.getHours()}시 ${nowTime.getMinutes()}분(수정)`,
                selected:false
              }
            }
            return item;
          }),
          editMode:false,
          addInputs:{
            ...current.addInputs,
            toDo:'',
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
              toDoMemo:current.addInputs.toDo,
              writeTime:`${nowTime.getFullYear()}년 ${nowTime.getMonth() + 1}월 ${nowTime.getDate()}일 ${nowTime.getHours()}시 ${nowTime.getMinutes()}분`,
              selected:false
            }
          ],
          lastDataId: current.lastDataId + 1,
          addInputs:{
            ...current.addInputs,
            toDo:'',
          }
        })
      )
    }
  }

  inputEnterKey = (e) => {
    (e.key === 'Enter') && (this.addEditFnc())
  }

  editFunc = () => {
    this.setState(
      current => ({
        ...current,
        editMode : true,
        addInputs : {
          ...current.addInputs,
          toDo:current.dataArray[current.editIndex].toDoMemo,
        }
      })
    )
  }

  deleteFunc = () => {
    this.setState(
      current => ({
        ...current,
        dataArray: current.dataArray.filter(item => {
          return !item.selected
        }),
      })
    )
  }

  selectFunc = (id, index) => {
    this.setState(
      current => ({
        ...current,
        dataArray: current.dataArray.map(item => {
          if(item.id === id){
            item = {
              ...item,
              selected:!current.dataArray[index].selected
            }
          } else {
            item = {
              ...item,
              selected:false
            }
          }
          return item;
        }),
        editIndex: index
      })
    )
  }

  componentDidUpdate(){
    localStorage.setItem('dataArray',JSON.stringify(this.state.dataArray));
    localStorage.setItem('lastDataID',JSON.stringify(this.state.lastDataId));
  }


  render(){
    return (
      <div className="wrap">
        <fieldset>
          <label>
            <input type="text" value={this.state.addInputs.toDo} onChange={this.inputChange} onKeyDown={this.inputEnterKey} />
          </label>
          <button onClick={this.addEditFnc}>{this.state.editMode ? "수정" : "추가"}</button>
        </fieldset>
        <div className="buttons">
          <button onClick={this.deleteFunc}><i className="xi-trash" /></button>
          {this.state.editMode || <button onClick={this.editFunc}><i className = "xi-pen-o" /></button>}
        </div>
        <table style={{textAlign:'center'}}>
          <thead>
            <tr>
              <th></th><th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.dataArray.map((item, index) => {
            const {id, toDoMemo, writeTime, selected} = item;
            return <TableRow key={id} id={id} index={index} toDo={toDoMemo} writeTime={writeTime} selected={selected} selectFunc={this.selectFunc} />
            })}
          </tbody>
        </table>
      </div>
    )
  }
}


