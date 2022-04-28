import React from 'react';

interface inputsType {
  name:string,english:string
}

export class ClassyList extends React.Component<{newAdd:inputsType},{
  dataArray:{id:number,name:string,english:string,active:boolean}[]
}> {
  constructor(props: { newAdd: inputsType }) {
    super(props);
    this.state = {
      dataArray : [
        {"id":1,"name":"Brotherton","english":"78","active":false},
        {"id":2,"name":"Phetteplace","english":"77","active":false},
        {"id":3,"name":"MacFadyen","english":"69","active":false},
        {"id":4,"name":"Tennock","english":"61","active":false},
        {"id":5,"name":"Lippitt","english":"52","active":false}
      ]
    }
  }

  createFn = () => {
    this.setState(current => ({
      ...current,
      dataArray : [
        ...current.dataArray,
        {
          id : current.dataArray[current.dataArray.length - 1].id + 1,
          ...this.props.newAdd,
          active : false
        }
      ]
    }))
  }

  submitFn: any;
  prevProps: any;
  prevState: any;

  componentDidMount = () => { 
    this.prevProps = this.props;
    setTimeout(()=>{this.prevState = this.state.dataArray});
    this.submitFn = () => {
      this.createFn()
    }
  }


  componentDidUpdate = () => {
    if(this.prevProps !== this.props) {
      this.submitFn = () => {
        this.createFn()
      }
      this.prevProps = this.props
      console.log('함수 선언이 업데이트 되었습니다')
    }
  }

  onSelect = (id: number) => {
    this.setState(current => ({
      ...current,
      dataArray : current.dataArray.map(
        item => {
          (item.id === id) && (item = { ...item, active: !item.active });
          return item
        }
      )
    }))

    setTimeout(() => { this.prevState = this.state.dataArray });
  }

  averaging = () => {
    if (this.prevState !== this.state.dataArray){
      const selects = this.state.dataArray.filter(item => item.active);
      let sum = 0;
      for(const item of selects){
        sum += parseInt(item.english)
      }
      console.log('평균 점수 계산이 작동되었습니다')
      return isNaN(sum/selects.length) ? 0 : sum/selects.length
    }
  }



  render(){
    return(
      <>
        <p><button onClick={this.submitFn}>등록</button></p>
        <p>선택된 사람들의 평균 영어점수 : {this.averaging()}</p>
        <table>
          <thead>
            <tr>
              <th>이름</th>
              <th>영어점수</th>
            </tr>
          </thead>
          <tbody>
            {this.state.dataArray.map(item => (
              <tr key = {item.id} onClick={()=>{this.onSelect(item.id)}} className = {item.active ? 'on' : ''}>
                <td>{item.name}</td>
                <td>{item.english}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    )
  }
}





export default class Classy extends React.Component<{},{
  inputs:inputsType
}> {
  constructor(props: {}){
    super(props);
    this.state = {
      inputs : {
        name:'',
        english:''
      },
    }
  }

  onChangeFn = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    this.setState(current => ({
      ...current,
      inputs : {
        ...current.inputs,
        [name] : value
      }
    }))
  }

  render(){
    return(
      <div className="wrap">
        <p>
          <label>이름
            <input type="text" onChange={this.onChangeFn} name="name" value={this.state.inputs.name} />
          </label>
        </p>
        <p>
          <label>영어점수
            <input type="text" onChange={this.onChangeFn} name="english" value={this.state.inputs.english}/>
          </label>
        </p>
        <ClassyList newAdd={this.state.inputs} />
      </div>
    )
  }
}