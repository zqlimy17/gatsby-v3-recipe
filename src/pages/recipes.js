import React from "react";
import Layout from "../components/Layout";
import AllRecipes from "../components/AllRecipes";

const Recipe = () => {
  return (
    <Layout>
      <main className="page">
        <h1>Recipe Page</h1>
        <AllRecipes />
      </main>
    </Layout>
  );
};

export default Recipe;
