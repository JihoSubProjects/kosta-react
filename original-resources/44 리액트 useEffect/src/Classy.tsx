import React from 'react';
import banner01 from './banner01.png'
import banner02 from './banner02.png'
import banner03 from './banner03.png'

export default class Classy extends React.Component<{},{pState:string}> {
  constructor(props){
    super(props);
    this.state = {
      pState : `${(Math.round(Math.random()*100))}`
    }
  }

  slideId
  ulRef:React.RefObject<HTMLUListElement> = React.createRef();

  componentDidMount = () => {
    let i = 0;
    const lis = Array.apply(null,this.ulRef.current.children);

    const slideFn = () => {
      if(i === lis.length) i = 0;
      i++;

      lis[i-1].style.opacity = '0'
      lis[i === lis.length ? 0 : i].style.display = 'block'
      setTimeout(() => {
        lis[i === lis.length ? 0 : i].style.opacity = '1'
      })
      setTimeout(() => {
        lis[i-1].style.display = 'none'
      },600);
    }

    this.slideId = setInterval(slideFn,2000)
  }

  componentWillUnmount = () => {
    clearInterval(this.slideId)
  }

  componentDidUpdate = () => {
    alert('값이 업데이트 되었습니다')
  }

  updateNum = () => {
    this.setState(current => ({
      ...current,
      pState : `${(Math.round(Math.random()*100))}`
    }))
  }

  render(){
    return(
      <div className="wrap">
        <ul style={{marginBottom:'30px',width:'500px',height:'100px'}} ref={this.ulRef} className="slide">
          <li><a href="./"><img src={banner01} alt="1번 배너" /></a></li>
          <li><a href="./"><img src={banner02} alt="2번 배너" /></a></li>
          <li><a href="./"><img src={banner03} alt="3번 배너" /></a></li>
        </ul>
        <p>{this.state.pState}<button onClick={this.updateNum} style={{marginLeft:'10px'}}>값 수정</button></p>
      </div>
    )
  }
}

