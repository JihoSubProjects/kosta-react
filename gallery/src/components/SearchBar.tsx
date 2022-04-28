import React, { useRef, useState } from "react"

export default function SearchBar(
  props: {keyword: string, search: (keyword: string) => void})
{

  const [keyword, setKeyword] = useState(props.keyword);
  const inputRef = useRef<HTMLInputElement>(null);

  const onChange = () => {
    if (!inputRef.current) return;
    setKeyword(inputRef.current.value);
  }

  const search = (e: React.FormEvent) => {
    e.preventDefault();
    setKeyword('');
    props.search(keyword);
  }

  return <form className="search" onSubmit={search}>
    <input
      type="text"
      ref={inputRef}
      value={keyword}
      onChange={onChange}
    />
    <input type="submit" value="search" />
  </form>

}
