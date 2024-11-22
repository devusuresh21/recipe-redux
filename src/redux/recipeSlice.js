import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async action to fetch recipes
export const fetchRecipes = createAsyncThunk('recipes/fetchRecipes', async () => {
  const response = await fetch('https://dummyjson.com/recipes');
  const data = await response.json();
  return data;
});

const recipeSlice = createSlice({
  name: 'recipes',
  initialState: {
    recipes: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.loading = false;
        state.recipes = action.payload.recipes;
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default recipeSlice.reducer;
