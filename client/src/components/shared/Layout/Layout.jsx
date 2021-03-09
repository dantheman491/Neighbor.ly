// import { Link } from "react-router-dom";
// import React from "react";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import "./Layout.css";

// function Layout(props) {
//   return (
//     <>
//       <header>
//         <h1>Neighbor.ly</h1>
//         <Link>Login/Register</Link>
//       </header>
//       {props.children}
//     </>
//   );
// }

const Layout = (props) => {
  return (
    <div className="layout-children">
      <div className="layout-content">
        <Nav user={props.user} />
        {/* screens go below */}
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
