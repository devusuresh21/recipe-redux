import React, { useState } from "react";
import RecipeList from "./RecipeList"; 
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../redux/recipeSlice"; 
import "./Navbar.css"; 

const Navbar = () => {
  const dispatch = useDispatch();
  const { recipes, loading, error } = useSelector((state) => state.recipes);
  const [searchQuery, setSearchQuery] = useState(""); 
  const [filteredRecipes, setFilteredRecipes] = useState([]); 


  useState(() => {
    if (recipes.length === 0) {
      dispatch(fetchRecipes());
    }
  }, [dispatch, recipes]);

 
  const handleSearch = () => {
    const filtered = recipes.filter((recipe) =>
      recipe.cuisine.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredRecipes(filtered); 
  };

  return (
    <div className="navbar-container">
      {/* Navbar Section */}
      <nav className="navbar">
        <div className="navbar-logo">
          <img
            src="https://icon-library.com/images/recipe-icon-png/recipe-icon-png-8.jpg"
            alt="Recipe Logo"
            className="logo"
          />
          <h1>RecipeApp</h1>
        </div>

        {/* Search Bar Section */}
        <div className="navbar-search">
          {/* Search input for cuisine */}
          <input
            type="text"
            placeholder="Search for recipes by cuisine..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} 
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </nav>

      {/* Loading, Error Handling */}
      {loading && <p>Loading recipes...</p>}
      {error && <p>Error: {error}</p>}

      {/* Recipe Cards Section */}
      <div className="recipe-list-container">
        <h2>Explore Recipes</h2>
        <RecipeList
          recipes={filteredRecipes.length > 0 ? filteredRecipes : recipes}
        />{" "}
        
      </div>
    </div>
  );
};

export default Navbar;
