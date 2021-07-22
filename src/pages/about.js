import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import Featured from "../components/Featured";

const About = () => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>About SimplyRecipes</h2>
            <p>
              Spicy jalapeno bacon ipsum dolor amet venison beef ribs shank ball
              tip filet mignon porchetta, beef shankle brisket pancetta picanha
              turducken buffalo short loin andouille.
            </p>
            <p>
              T-bone cupim turkey sirloin bresaola strip steak kielbasa kevin
              capicola shankle. Beef bacon pancetta, jowl pork belly andouille
              meatball short ribs kevin salami sirloin.
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="person pouring salt in bowl"
            className="about-img"
            placeholder="tracedSVG"
          />
        </section>
        <Featured />
      </main>
    </Layout>
  );
};

export default About;
