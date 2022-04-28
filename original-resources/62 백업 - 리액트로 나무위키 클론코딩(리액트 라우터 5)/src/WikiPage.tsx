import React from 'react';

import data from './data';
import './scss/WikiPage.scss';

export default class WikiPage extends React.Component<{match:any},{}> {

  constructor (props){
    super(props)
  }



  content = () => {
    if(this.props.match.params.pageName === undefined){
      this.props.match.params.pageName = 'React(라이브러리)'
    }
    for(let i = 0 ; i < data.length ; i++){
      if(this.props.match.params.pageName === data[i].title){
        return data[i].content;
      };
    }
  }

  render(){
    document.title = this.props.match.params.pageName;
    return(
      <section>
        <h2>{this.props.match.params.pageName || 'React(라이브러리)'}</h2>
        {this.content()}
      </section>
    )
  }

}