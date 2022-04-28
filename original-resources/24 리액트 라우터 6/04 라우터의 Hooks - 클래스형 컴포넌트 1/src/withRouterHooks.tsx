import React from 'react';
import {useParams} from 'react-router-dom';

export default function withRouterHooks(Component)
:(props)=>JSX.Element{
  return (
    function HooksComponent(props){
      const upCall = useParams();
      return <Component up={upCall} {...props}/>
    }
  )
}
