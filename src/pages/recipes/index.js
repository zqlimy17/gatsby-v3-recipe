import React from "react";
import Layout from "../../components/Layout";
import AllRecipes from "../../components/AllRecipes";
import Seo from "../../components/Seo";

const Recipe = () => {
  return (
    <Layout>
      <Seo title="Recipes" />
      <main className="page">
        <h1>Recipe Page</h1>
        <AllRecipes />
      </main>
    </Layout>
  );
};

export default Recipe;
