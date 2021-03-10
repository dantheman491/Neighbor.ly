import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import "./About.css";

function About(props) {
  return (
    <Layout user={props.user}>
      <div className="about-us-container">
        <div className="paragraph-about">
          <h1 className="about-h1">About Us</h1>
          <p className="blurb">
            Established in 2021, this fully searchable and interactive site
            unites and categorizes the otherwise unused tools in your garage.
            With over 4 million annual site visitors and 70,000 subscribers,
            Neighbor.ly is setting a new precedent. Neighbor.ly works with
            representatives who are closest to the neighborhood - be it the
            owner or local store - ensuring that you are always dealing with the
            most experienced and knowledgeable parties. Neighbor.ly is more than
            a commerce site, it's lending a helping hand with those closest to
            you, to establish a stonger sense of community, and most importantly
            a stronger sense of trust.
          </p>
        </div>
        <div className="about-image">
          <img
            className="about-rich"
            src="https://images.pexels.com/photos/5543176/pexels-photo-5543176.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          />
        </div>
      </div>
    </Layout>
  );
}

export default About;
