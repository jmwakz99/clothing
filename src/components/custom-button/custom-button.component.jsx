import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, SigninWithGoogle, ...otherProps }) => (
  <button
    className={`${SigninWithGoogle ? "sign-in-google" : ""}  custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
