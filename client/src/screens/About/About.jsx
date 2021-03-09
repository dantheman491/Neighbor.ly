import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import "./About.css";

function About(props) {
  return (
    <Layout user={props.user}>
      <div className="about-us-container">
        <div className="paragraph-about">
          <h1 className="about-h1">About Us</h1>
          <p>
            Representing the largest majority of islands available for sale,
            Valhalla Inc. is the only international real estate web site
            dedicated exclusively to island properties. Established in 2021,
            this fully searchable and interactive site unites and categorizes
            the otherwise fragmented and disparate island marketplace. With over
            4 million annual site visitors and 70,000 subscribers, Valhalla is
            the center of the island world. Valhalla works with representatives
            who are closest to the island - be it the owner or agent - ensuring
            that you are always dealing with the most experienced and
            knowledgeable parties. The relationships we have established with
            regional island experts is your gateway to accessing currently
            unadvertised properties and ensures that you are receiving the most
            up-to-date island information.
          </p>
        </div>
        <div className="about-image">
          <img
            className="about-rich"
            src="https://i.pinimg.com/originals/7e/c2/6b/7ec26b79c2c51dccf502b560c8a808ad.jpg"
          />
        </div>
      </div>
    </Layout>
  );
}

export default About;
