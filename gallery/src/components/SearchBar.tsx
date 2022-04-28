import React, { useState } from "react"

export default function SearchBar(props: {search: (keyword: string) => void}) {

  const [keyword, setKeyword] = useState('');

  const search = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      props.search(keyword);
      e.currentTarget.value = '';
    }
  }

  return <div className="search">
    <input
      type="text"
      onChange={e => setKeyword(e.target.value)}
      onKeyUp={search}
    />
  </div>

}
