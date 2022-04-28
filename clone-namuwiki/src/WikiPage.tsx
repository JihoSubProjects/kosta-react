import {useParams} from 'react-router-dom';

import data from './data';
import './scss/WikiPage.scss';


// function withUseParams(Component: any): (props: any) => JSX.Element {
//   return (function HooksComponent(props){
//     const upCall = useParams();
//     return <Component up={upCall} {...props}/>
//   })
// }


// class WikiPage extends React.Component<{up: any}, {}> {
//   content = () => {
//     if(this.props.up.pageName === undefined){
//       this.props.up.pageName = 'React(라이브러리)'
//     }

//     for(const item of data){
//       if(this.props.up.pageName === item.title){
//         return item.content;
//       };
//     }
//   }

//   render(){
//     document.title = this.props.up.pageName;
//     return(
//       <section>
//         <h2>{this.props.up.pageName || 'React(라이브러리)'}</h2>
//         {this.content()}
//       </section>
//     )
//   }

// }

// export default withUseParams(WikiPage);



import React, { useEffect, useState } from 'react';
export default function WikiPage() {
  const up = useParams();

  const [title, setTitle] = useState('React(라이브러리)');
  const [content, setContent] = useState(<></>);

  let count = 1;

  useEffect(() => {
    console.log(count++, up.pageName, title);

    if (up.pageName) setTitle(up.pageName);
    else setTitle('React(라이브러리)');
    const _data = data.find(d => d.title === title);
    if (_data) setContent(_data.content);

    console.log(count, up.pageName, title);
  }, [up.pageName, title, count]);

  return (
    <section>
      <h2>{title}</h2>
      {content}
    </section>
  );
}



// export default function WikiPage() {
//   const up = useParams();
//   const content = () => {
//     if (!up.pageName) {
//       return data[0].content;
//     }
//     for (const d of data) {
//       if (up.pageName === d.title) {
//         return d.content;
//       }
//     }
//   }

//   return (
//     <section>
//       <h2>{up.pageName || 'React(라이브러리)'}</h2>
//       {content()}
//     </section>
//   );
// }