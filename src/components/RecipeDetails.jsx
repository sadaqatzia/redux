import React from 'react';
import { useSelector } from 'react-redux';

const RecipeDetails = () => {
  const recipe = useSelector((state) => state.recipes.selectedRecipe);

  if (!recipe) return null; // Hide if no recipe is selected

  return (
    <div className={`recipe-details-container ${recipe ? 'active' : ''}`}>
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} />
      <p><strong>Ingredients:</strong></p>
      <ul>
        {recipe.extendedIngredients?.map((ing) => (
          <li key={ing.id}>{ing.original}</li>
        ))}
      </ul>
      <p><strong>Instructions:</strong></p>
      <p>{recipe.instructions || 'No instructions available.'}</p>
    </div>
  );
};

export default RecipeDetails;
