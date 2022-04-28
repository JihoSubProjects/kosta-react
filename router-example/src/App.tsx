import { BrowserRouter, Route, Routes} from 'react-router-dom';

import Navigator from './components/Navigator';
import Home from './views/Home';
import About from './views/About';
import Error404 from './views/Error404';
import Member from './views/Member';

export default function App() {
  return <>
    <BrowserRouter>
      <Navigator />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about/*' element={<About />} />
        <Route path='/about/:parameter/*' element={<About />} />
        <Route path='/member' element={<Member />} />
        <Route path='/member/:name' element={<Member />} />
        <Route path='/*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  </>
}
