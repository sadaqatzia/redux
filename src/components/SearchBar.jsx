import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRecipes } from '../features/recipes/recipesSlice';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (query) {
      dispatch(fetchRecipes(query));
    }
  };

  return (
    <div>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Enter ingredient" />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
