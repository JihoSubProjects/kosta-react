import React, { useEffect } from 'react';
import {useNavigate, useParams, useSearchParams} from 'react-router-dom';

export default function withRouterHooks(Component)
:(props)=>JSX.Element{
  return (function HooksComponent(props){

    const upCall = useParams();
    const [searchParams] = useSearchParams();
    const un = useNavigate();

    useEffect(function(){
      if(window.location.href.indexOf('member') !== -1
      && upCall.name === undefined){

        alert('잘못된 경로로 접근하였습니다.')
        // un(-1)
        un('/',{replace:true})
        
      }
    },[un,upCall.name])

    return <Component up={upCall} sp={searchParams} {...props}/>
  })
}