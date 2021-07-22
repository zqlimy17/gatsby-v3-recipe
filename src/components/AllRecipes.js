import React from "react";
import TagList from "./TagList";
import RecipesList from "./RecipesList";
const AllRecipes = () => {
  return (
    <div>
      all recipes
      <TagList />
      <RecipesList />
    </div>
  );
};

export default AllRecipes;
