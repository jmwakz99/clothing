import React from "react";
import { Route } from "react-router-dom";
import Directory from "../../components/directory/directory.component";

import "./homepage.styles.scss";

const Homepage = () => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};
export default Homepage;
