import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import RecipesList from "./RecipesList";
const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;

const Featured = () => {
  const data = useStaticQuery(query);
  const {
    allContentfulRecipe: { nodes: recipes },
  } = data;
  return (
    <section className="featured-recipes">
      <h5>Look at this Awesomesauce!</h5>
      <RecipesList recipes={recipes} />
    </section>
  );
};

export default Featured;
