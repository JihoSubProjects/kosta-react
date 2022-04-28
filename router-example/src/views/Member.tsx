import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function Member() {
    const params = useParams();
    const un = useNavigate();

    let count = 0;

    useEffect(() => {
        count++;
        console.log(params, count);
        if (!params.name) {
            alert('bad request');
            un('/', { replace: true });
        }
    }, [params, un, count]);

    return <>
        <h1>Member</h1>
        <h3>{params.name}</h3>
    </>
}