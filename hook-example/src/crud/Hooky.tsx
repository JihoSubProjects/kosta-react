import React, { useRef, useState } from 'react';

export default function Hooky(){

  const [numbers,setNumbers] = useState([{
    id : 1,
    number : Math.round(Math.random() * 100)
  }]);

  const nextId = useRef(2);

  const createFn = () => {
    setNumbers(current => ([
      ...current,
      {
        id: nextId.current,
        number : Math.round(Math.random() * 100)
      }
    ]))

    setTimeout(() => {nextId.current++});
  }

  return(
    <div className="wrap">
        <p>
          <button onClick={createFn}>create</button>
        </p>
        <table>
          <thead>
            <tr>
              <th>ID</th><th>Number</th>
            </tr>
          </thead>
          <tbody>
            {numbers.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td><td>{item.number}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>

  )
}

