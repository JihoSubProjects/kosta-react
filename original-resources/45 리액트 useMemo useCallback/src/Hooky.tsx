import React, { useState, useCallback, useMemo } from 'react';

export function HookyList(props){
  const [dataArray,setDataArray] = useState([
    {"id":1,"name":"Brotherton","english":"78","active":false},
    {"id":2,"name":"Phetteplace","english":"77","active":false},
    {"id":3,"name":"MacFadyen","english":"69","active":false},
    {"id":4,"name":"Tennock","english":"61","active":false},
    {"id":5,"name":"Lippitt","english":"52","active":false}
  ]);

  const submitFn = useCallback(() => {
    setDataArray(current => ([
      ...current,
      {
        id : current[current.length-1].id + 1,
        ...props.newAdd,
        active : false
      }
    ]))
      console.log('함수 선언이 업데이트 되었습니다.')
    },[props]
  )

  const onSelect = (id) => {
    setDataArray(current => (current.map(
        item => {
          (item.id === id) && (item = { ...item, active: !item.active });
          return item
        }
    )))
  }

  const averaging = useMemo(() => {
      const selects = dataArray.filter(item => item.active);
      let sum = 0;
      for(const item of selects){
        sum += parseInt(item.english)
      }
      console.log('평균 점수 계산이 작동되었습니다')
      return isNaN(sum/selects.length) ? 0 : sum/selects.length
    },[dataArray])

  return(
<>
        <p><button onClick={submitFn}>등록</button></p>
        <p>선택된 사람들의 평균 영어점수 : {averaging}</p>
        <table>
          <thead>
            <tr>
              <th>이름</th>
              <th>영어점수</th>
            </tr>
          </thead>
          <tbody>
            {dataArray.map(item => (
              <tr key = {item.id} onClick={()=>{onSelect(item.id)}} className = {item.active ? 'on' : ''}>
                <td>{item.name}</td>
                <td>{item.english}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
  )
}

export default function Hooky(){
  const [inputs,setInputs] = useState({
    name:'',
    english:''
  })

  const   onChangeFn = (e) => {
    const {name,value} = e.target;

    setInputs(current => ({
      ...current,
      [name] : value
    }))
  }



  return(
    <div className="wrap">
        <p>
          <label>이름
            <input type="text" onChange={onChangeFn} name="name" value={inputs.name} />
          </label>
        </p>
        <p>
          <label>영어점수
            <input type="text" onChange={onChangeFn} name="english" value={inputs.english}/>
          </label>
        </p>
        <HookyList newAdd={inputs} />
      </div>
  )
}