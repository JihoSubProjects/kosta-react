import { useState } from 'react';
import './assets/css/App.scss'
import Gallery from './components/Gallery';
import SearchBar from './components/SearchBar';

export default function App() {
  const [keyword, setKeyword] = useState('');

  const search = (k: string) => {
    setKeyword(k);
  }

  return (
    <div className="App">
      <h1>Snap Shot</h1>
      <SearchBar keyword={keyword} search={search} />
      <Gallery keyword={keyword} />
    </div>
  );
}
