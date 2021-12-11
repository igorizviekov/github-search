import React from 'react';
import List from '../List/List';
import { useState } from 'react';
import './Search.scss';
function Search() {
  const [input, setInput] = useState('');
  const [search, setSearch] = useState([]);

  const searchHandler = () => {
    setSearch(input);
  };

  return (
    <div className="Search">
      <h1>Search</h1>
      <input
        type="text"
        value={input}
        onInput={(e) => setInput(e.target.value)}
      ></input>
      <button onClick={searchHandler}>Search</button>
      <List search={search} />
    </div>
  );
}

export default Search;
