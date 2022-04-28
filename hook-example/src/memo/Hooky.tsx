import React, { useState, useCallback, useMemo } from 'react';
import './Label.scss'

interface Tuple {
  name: string;
  english: string;
}

interface Props {
  newAdd: Tuple;
}

export function HookyList(props: Props) {
  const [dataArray, setDataArray] = useState([
    { "id": 1, "name": "Brotherton", "english": "78", "active": false },
    { "id": 2, "name": "Phetteplace", "english": "77", "active": false },
    { "id": 3, "name": "MacFadyen", "english": "69", "active": false },
    { "id": 4, "name": "Tennock", "english": "61", "active": false },
    { "id": 5, "name": "Lippitt", "english": "52", "active": false }
  ]);

  const submitFn = useCallback(() => {
    setDataArray(current => ([
      ...current,
      {
        id: current[current.length - 1].id + 1,
        ...props.newAdd,
        active : false
      }
    ]))
    console.log('함수 선언이 업데이트 되었습니다.')
  }, [props])

  const onSelect = (id: number) => {
    setDataArray(current => (current.map(
        item => {
          (item.id === id) && (item = { ...item, active: !item.active });
          return item
        }
    )))
  }

  const average = useMemo(() => {
    const list = dataArray.filter(d => d.active).map(d => parseInt(d.english));
    const sum = list.reduce((p, c) => p += c, 0);
    return list.length === 0 ? 0 : sum / list.length;
  }, [dataArray])

  return <>
    <p><button onClick={submitFn}>등록</button></p>
    <p>선택된 사람들의 평균 영어점수 : {average}</p>
    <table>
      <thead>
        <tr>
          <th>이름</th>
          <th>영어점수</th>
        </tr>
      </thead>
      <tbody>
        {dataArray.map(item => (
          <tr key={item.id} onClick={()=>{onSelect(item.id)}} className = {item.active ? 'on' : ''}>
            <td>{item.name}</td>
            <td>{item.english}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
}

export default function Hooky() {
  const [inputs,setInputs] = useState<Tuple>({ name: '', english: '' })

  const onChangeFn = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs(current => ({ ...current, [name] : value }))
  }

  return <div className="wrap">
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
}