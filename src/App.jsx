import React from 'react';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

const App = () => {
  return (
    <div>
      <h1>Recipe Finder</h1>
      <SearchBar />
      <RecipeList />
      <RecipeDetails />
    </div>
  );
};

export default App;
