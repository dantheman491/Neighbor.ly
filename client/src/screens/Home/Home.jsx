import React from "react";
import { useHistory } from "react-router-dom";
// import ImageSlider from "../../components/ImageSlider/ImageSlider";
import Layout from "../../components/shared/Layout/Layout.jsx";
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
        <div className="about-info"></div>
        <div className="about-info-container">
          <div className="text-block">
            <p className="first-paragraph">
              Life is complicated enough. A new way to connect with those around
              you and be neighborly at the same time. Get Neighborly, and let us
              simplify your next project
            </p>
          </div>
          <div className="bkgd-box"></div>
        </div>
      </div>
      <div className="explore-container">
        <div className="explore-info"></div>
        <div className="explore-info-container">
          <h3 className="one-h3">Make Money</h3>
          <p className="paragraph">
            More uses for your unused tools, strengthen your community.
          </p>
        </div>
        <div className="explore-info-container1">
          <h3 className="one-h3">Create Revenue</h3>
          <p className="paragraph">
            Neighbor.ly provides an opportunity to make moeny with little
            effort.
          </p>
        </div>
        <div className="explore-info-container">
          <h3 className="one-h3">Save Money</h3>
          <p className="paragraph">
            Why buy a tool you will only use a few times? Use Neighbor.ly
            instead.
          </p>
        </div>
      </div>
      {/* </div> */}
    </Layout>
  );
};

export default Home;
