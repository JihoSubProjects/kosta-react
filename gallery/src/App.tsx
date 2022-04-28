import { useState } from 'react';
import './assets/css/App.scss'
import Gallery from './components/Gallery';
import SearchBar from './components/SearchBar';

export default function App() {
  const [keyword, setKeyword] = useState('');

  return (
    <div className="App">
      <h1>Snap Shot</h1>
      <SearchBar search={setKeyword} />
      <Gallery keyword={keyword} />
    </div>
  );
}
