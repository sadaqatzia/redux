import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiKey = '20e8d773027b4b1b9cd8f47f2f39db49';

export const fetchRecipes = createAsyncThunk('recipes/fetchRecipes', async (query) => {
  const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=5&apiKey=${apiKey}`);
  const data = await response.json();
  return data.results || [];
});

export const fetchRecipeDetails = createAsyncThunk('recipes/fetchRecipeDetails', async (id) => {
  const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`);
  return await response.json();
});

const recipesSlice = createSlice({
  name: 'recipes',
  initialState: { recipes: [], selectedRecipe: null, status: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.recipes = action.payload;
      })
      .addCase(fetchRecipeDetails.fulfilled, (state, action) => {
        state.selectedRecipe = action.payload;
      });
  },
});

export default recipesSlice.reducer;
