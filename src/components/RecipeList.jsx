import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRecipeDetails } from '../features/recipes/recipesSlice';

const RecipeList = () => {
  const recipes = useSelector((state) => state.recipes.recipes);
  const dispatch = useDispatch();

  return (
    <div className={`recipe-container ${recipes.length > 0 ? 'active' : ''}`}>
      <h2>Recipes</h2>
      <div id="results">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe" onClick={() => dispatch(fetchRecipeDetails(recipe.id))}>
            <h3>{recipe.title}</h3>
            <img src={recipe.image} alt={recipe.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
