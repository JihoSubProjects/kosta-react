import React from 'react';

class Comp extends React.Component<{},{}>{

  constructor(props:{},public pTag){
    super(props);
    this.pTag = React.createRef();
  }

  clickFn = () => {
    alert(this.pTag.current.innerText)
  }

  render(){
    return (
      <div style={{padding:'50px'}}>
        <p style={{marginBottom:'50px'}} ref={this.pTag}>다람쥐 헌 쳇바퀴에 타고파</p>
        <button onClick={this.clickFn}>클릭</button>
      </div>
    )
  }

}

export default Comp