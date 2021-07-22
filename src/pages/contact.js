import React from "react";
import Featured from "../components/Featured";
import Layout from "../components/Layout";

const Contact = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want to get in touch?</h3>
            <p>
              Bacon ipsum dolor amet kielbasa buffalo ribeye, fatback ham
              turducken.
            </p>
            <p>
              Meatball fatback cow, frankfurter leberkas beef bresaola rump
              meatloaf tenderloin.
            </p>
            <p>
              Pastrami jerky burgdoggen tongue, meatball short loin chislic
              t-bone venison. Pork kevin prosciutto beef ribs, landjaeger tail
              tongue jerky ground round t-bone.
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">your message</label>
                <textarea type="text" name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                submit
              </button>
            </form>
          </article>
        </section>
        <Featured />
      </main>
    </Layout>
  );
};

export default Contact;
