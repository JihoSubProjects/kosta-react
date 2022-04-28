import { Link } from 'react-router-dom';

import '../assets/css/Navigator.scss';

export default function Navigator() {
    return <nav className='navi'>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/member'>Member</Link></li>
        </ul>
    </nav>
}
