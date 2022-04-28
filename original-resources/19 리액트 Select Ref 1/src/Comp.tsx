import React from 'react';

export default class Comp extends React.Component<{},{}>{

  constructor(props:{},public pTag){
    super(props);
    this.pTag = React.createRef();
  }

  changeFn = (e) => {
    window.open(e.target.value);
  }

  render(){
    return (
      <div style={{padding:'50px'}}>
        <select className="ft_select" onChange={this.changeFn}>
          <option value="javascript:;">Family Site</option>
          <option value="http://www.samtan.co.kr/">(주)삼탄</option>
          <option value="http://www.samchullyeng.co.kr/">(주)삼천리 ENG</option>
          <option value="http://www.samchullyes.co.kr/">(주)삼천리 ES</option>
          <option value="http://www.huces.co.kr/">(주)HUCES</option>
          <option value="http://www.chai797.co.kr/">(주)SL&C(Chai797)</option>
          <option value="http://www.samchullymotors.co.kr/">(주)삼천리모터스</option>
          <option value="https://www.cheonman.or.kr/">천만장학회</option>
        </select>
      </div>
    )
  }

}


