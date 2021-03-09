import React from "react";
import { useHistory } from "react-router-dom";
// import ImageSlider from "../../components/ImageSlider/ImageSlider";
import Layout from "../../components/shared/Layout/Layout";
import "./Home.css";

const Home = (props) => {
  const history = useHistory();

  return (
    <Layout user={props.user}>
      {/* <div className="home-container">
        <div className="slider-container">
          <ImageSlider />
        </div> */}
      <div className="about-container">
        <div className="about-info-container"></div>
        <div className="about-info">
          <h2>What makes us different?</h2>
          <hr className="linebreak"></hr>
          <p>
            At Valhalla Inc., the foremost global marketplace for private island
            sales and rentals, we sell islands because{" "}
            <span className="highlight-light">why not</span>. Whether you are in
            the market to purchase your dream island or ready to sell your
            prized property, we are{" "}
            <span className="highlight-light">100 percent </span>dedicated to
            the world of private islands.
          </p>
        </div>
      </div>
      <div className="explore-container">
        <div className="explore-info">
          <h2>Explore islands you'll never afford</h2>
          <hr className="linebreak"></hr>
          <p>
            For those who want peace and complete{" "}
            <span className="highlight-dark">seclusion</span>, having a private
            island is the only way to go. Frankly, if you don't own your own
            island, you're not doing it right. A{" "}
            <span className="highlight-dark">large slice of heaven </span>
            for a small slice of cash.
          </p>
          <button
            className="explore-button"
            onClick={() => history.push("/listings")}
          >
            Explore
          </button>
        </div>
        <div className="explore-info-container"></div>
      </div>
      {/* </div> */}
    </Layout>
  );
};

export default Home;
