import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ViewRecipe.css"; 


const ViewRecipe = () => {
  const { id } = useParams(); // Get the ID from the URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/recipes/${id}`);
        const data = await response.json();
        setRecipe(data);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <p>Loading...</p>; 
  }

  return (
    <div>




      <div className="pageContainer">
   
      <div className="card">
        <div className="cardContent">
          <div className="imageContainer">
            <img src={recipe.image} alt={recipe.name} className="recipeImage" />
          </div>
          <div className="detailsContainer">
            <h1 className="recipeTitle">{recipe.name}</h1>
            <div className="section">
              <h2>Ingredients:</h2>
              <ul className="list">
                {recipe.ingredients?.map((ingredient, index) => (
                  <li key={index} className="listItem">{ingredient}</li>
                ))}
              </ul>
            </div>
            <div className="section">
              <h2>Instructions:</h2>
              <ol className="list">
                {recipe.instructions?.map((instruction, index) => (
                  <li key={index} className="listItem">{instruction}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </div>
    
  );
};

export default ViewRecipe;
