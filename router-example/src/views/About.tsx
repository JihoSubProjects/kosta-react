import { useParams, Link, Route, Routes } from 'react-router-dom'

import Address from '../components/Address';
import Telephone from '../components/Telephone';

function AboutFunction() {
    const up = useParams();

    return <>
        <h1>About</h1>
        <p>{up.parameter}</p>
    </>;
}

// interface Props {
//     up: Readonly<Params<string>>
// }

// function withRouterHooks(Component: any): (props: Props) => JSX.Element {
//     return (props) => <Component up={useParams()} />;
// }

// class AboutClass extends React.Component<Props, {}> {
//     render(): React.ReactNode {
//         return <>
//             <p>{this.props.up.parameter}</p>
//             <h1>About</h1>
//         </>;
//     }
// }

// export default withRouterHooks(AboutClass);

export default function About() {
    return <>
        <AboutFunction />
        <hr />
        <ul>
            <li><Link to='addr'>address</Link></li>
            <li><Link to='tel'>telephone</Link></li>
        </ul>
        <Routes>
            <Route path='addr' element={<Address />} />
            <Route path='tel' element={<Telephone />} />
        </Routes>
    </>;
}