import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  return (
    <div style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "10px", textAlign: "center" }}>
      <img
        src={recipe.image}
        alt={recipe.name}
        style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px" }}
      />
      <h3>{recipe.name}</h3>
      <p>Calories: {recipe.caloriesPerServing}</p>
      <p>Cuisin: {recipe.cuisine}</p>
      <p>Rating: {recipe.rating} ⭐</p>
      <Link to={`/view-recipe/${recipe.id}`}>
        <button
          style={{
            padding: "5px 10px",
            border: "none",
            borderRadius: "4px",
            backgroundColor: "#007bff",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          View Details
        </button>
      </Link>
    </div>
  );
};

export default RecipeCard;
