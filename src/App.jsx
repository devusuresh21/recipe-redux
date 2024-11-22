import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Navbar component as the home page
import RecipeList from "./components/RecipeList"; // RecipeList component to display recipes
import ViewRecipe from "./components/ViewRecipe";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home page with Navbar */}
        <Route path="/" element={<Navbar />} />
        
        {/* Recipes page */}
        <Route path="/recipes" element={<RecipeList />} />
        <Route path="/view-recipe/:id" element={<ViewRecipe />} />
      </Routes>
    </Router>
  );
};

export default App;
