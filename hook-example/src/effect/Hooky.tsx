import React, { useState, useRef, useEffect } from 'react';
import banner01 from './banner01.png'
import banner02 from './banner02.png'
import banner03 from './banner03.png'

export default function Hooky() {
  const [pState,setPState] = useState(Math.round(Math.random() * 100));

  const ulRef = useRef<HTMLUListElement>(null);
  const slideId = useRef<NodeJS.Timeout>(null);

  useEffect(() => {
    let i = -1;

    const children = ulRef.current?.children as unknown as HTMLDataListElement[];
    const list = Array.apply(null, children) as HTMLDataListElement[];
    const size = list.length;

    console.log(list);

    const updateSlide = () => {
      i += 1;
      i %= size;

      const prev = list[(i - 1 + size) % size];
      const curr = list[i];

      prev.style.opacity = '0'
      curr.style.display = 'block'
      setTimeout(() => curr.style.opacity = '1')
      setTimeout(() => prev.style.display = 'none', 600);
    }

    (slideId.current as NodeJS.Timeout) = setInterval(updateSlide, 2000)

    // return(() => clearInterval(slideId.current as NodeJS.Timeout))
  },[])

  useEffect(() => console.log('값이 업데이트 되었습니다'), [pState])

  const updateNum = () => {
    setPState(Math.round(Math.random()*100))
  }

  return(
    <div className="wrap">
      <ul style={{marginBottom:'30px', width:'500px', height:'100px'}} ref={ulRef} className="slide">
        <li><a href="./"><img src={banner01} alt="1번 배너" /></a></li>
        <li><a href="./"><img src={banner02} alt="2번 배너" /></a></li>
        <li><a href="./"><img src={banner03} alt="3번 배너" /></a></li>
      </ul>
      <p>{pState}<button onClick={updateNum} style={{marginLeft:'10px'}}>값 수정</button></p>
    </div>
  )
}

