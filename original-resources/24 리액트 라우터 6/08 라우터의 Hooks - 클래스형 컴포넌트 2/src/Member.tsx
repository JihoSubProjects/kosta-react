import React from 'react';
import withRouterHooks from './withRouterHooks'

class Member extends React.Component<{up},{}>{
  render(){
    return(
      <div style={{padding:'40px'}}>
        <p style={{marginTop:'20px'}}>{this.props.up.name}의 회원 정보</p>
      </div>
    )
  }
}

export default withRouterHooks(Member)
