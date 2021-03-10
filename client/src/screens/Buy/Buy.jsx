import React from "react";
import "./Buy.css";
import Layout from "../../components/shared/Layout/Layout";

export const Buy = (props) => {
  return (
    <Layout user={props.user}>
      <div className="about-us-container">
        <div className="paragraph">
          <h1 className="about-h1">Renting a tool </h1>
          <p>
            Thank you for your interest in a Neighbor.ly. This app is currently
            in developement.
          </p>
        </div>
        <div className="about-image">
          <img
            className="about-rich"
            src="https://images.pexels.com/photos/3228688/pexels-photo-3228688.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />
        </div>
      </div>
    </Layout>
  );
};
export default Buy;
